import React, { useState } from "react";
import styled from 'styled-components';


import { Statistics } from "../Statistics/Statistics";
import { ButtonFeedback } from "../ButtonFeedback/ButtonFeedback";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickButton = (event) => {
    switch (event.target.innerText) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100)
  };

  const buttons = Object.keys({ good, neutral, bad });

  return (
    <Card>
      <Section title="Please leave feedback">
      <ButtonFeedback
        buttons={buttons}
        onClickButton={onClickButton} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? <Notification message="There is no feedback"/> : <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={countPositiveFeedbackPercentage()}
        />}
      </Section>
    </Card>
  )
};

const Card = styled.div`
  margin: 0 auto;
  padding: 16px;
  width: 400px;
  border: 4px solid;
  border-radius: 20px;
  background: lavender;
`






// export class OldFeedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }
  
//   onClickButton = event => {
//     const state = event.target.innerText;
//     // console.log(state);
//     this.setState(prevState => {
//       return { [state]: prevState[state] + 1 };
//     });
//   };

//   countTotalFeedback() {
//     const {good, neutral, bad} = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     return Math.round(good / this.countTotalFeedback() * 100)
//   };

//   render() {
//     console.log(this.state);
//     const buttons = Object.keys(this.state)
//     // console.log(buttons);
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();

//     return (
//       <Card>
//         <Section title="Please leave feedback">
//         <ButtonFeedback
//           buttons={buttons}
//           onClickButton={this.onClickButton} />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? <Notification message="There is no feedback"/> : <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//           />}
//         </Section>
//       </Card>
//     )
//   }
// }

