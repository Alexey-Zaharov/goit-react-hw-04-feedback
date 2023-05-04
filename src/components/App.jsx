import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const dataToRender = { good, neutral, bad };
  const total = good + neutral + bad;
  const positivePercentage =
    Math.round(good / ((good + neutral + bad) / 100)) || 0;

  return (
    <>
      <Section title="Feedback">
        <FeedbackOptions
          options={Object.keys(dataToRender)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistick">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
