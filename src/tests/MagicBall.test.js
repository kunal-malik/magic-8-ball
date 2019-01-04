import React from 'react';
import { shallow, mount } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MagicBall from '../components/MagicBall';
import Constants from '../constants';

const mockAxios = new MockAdapter(axios);
const randomAdvice = "Yes";
mockAxios.onGet(`/api/magic8ball/v1/advice/`).reply(200, randomAdvice);

describe('MagicBall component', () => {
  it('renders without crashing', () => {
    shallow(<MagicBall />);
  });

  it('should render ball contents once mounted', () => {
    const wrapper = mount(<MagicBall />)
    const container = wrapper.find('[id="magic-ball-container"]')
    expect(container.exists()).toBe(true)
    const ballAnswer = container.find('[id="ball-answer-container"]')
    expect(ballAnswer.exists()).toBe(true)
    const advice = ballAnswer.find('[id="advice"]')
    expect(advice.exists()).toBe(false)
    setTimeout(() => {
      expect(advice.exists()).toBe(true)
    }, 2000);
  });

  it('should call api when user seeks an advice', () => {
    spyOn(MagicBall.prototype, 'getAdvice').and.callThrough();
    const wrapper = mount(<MagicBall />)
    const ballContainer = wrapper.find('[id="ball-answer-container"]')
    expect(wrapper.state().advice).toEqual(Constants.BALL_INITIAL_TEXT);
    ballContainer.simulate('click')
    expect(MagicBall.prototype.getAdvice).toHaveBeenCalled()
    setTimeout(() => {
      expect(wrapper.state().advice).toEqual(randomAdvice);
    }, 500)
  })
});
