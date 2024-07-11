import { StatisticLine } from 'components/Display/StatisticLine'
import { Average } from 'components/Display/Average'
import { Positive } from 'components/Display/Positive'
import { Title } from 'components/Display/Title'

export const Stats = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <div>
          <Title title={'Statistics'} />
          No feedback given
        </div>
      )
    } else {
      return (
        <div>
          <Title title={'Statistics'} />
          <table>
            <tbody>
              <StatisticLine value={good} text={'Good'} />
              <StatisticLine value={neutral} text={'Neutral'} />
              <StatisticLine value={bad} text={'Bad'} />
              <Average average={(good - bad) / (good + neutral + bad) || 0} />
              <Positive positive={(good / (good + neutral + bad)) * 100 || 0} />
            </tbody>
          </table>
        </div>
      )
    }
  }