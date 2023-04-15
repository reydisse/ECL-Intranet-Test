import React, { useState, useEffect } from "react"

const quotes = [
  '"Choose a job you love, and you will never have to work a day in your life." - Confucius',
  '"Opportunities are usually disguised as hard work, so most people don\'t recognize them." - Ann Landers',
  '"Without ambition, one starts nothing. Without work, one finishes nothing. The prize will not be sent to you. You have to win it." - Ralph Waldo Emerson',
  '"The only way to do great work is to love what you do." - Steve Jobs',
  '"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do." - Pele',
  '"The only place where success comes before work is in the dictionary." - Vidal Sassoon',
  '"The only thing that overcomes hard luck is hard work." - Harry Golden',
  '"Don\'t watch the clock; do what it does. Keep going." - Sam Levenson',
  '"I\'m a great believer in luck, and I find the harder I work, the more I have of it." - Thomas Jefferson',
  '"Work hard, stay positive, and get up early. It\'s the best part of the day." - George Allen, Sr.',
]

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    // Set initial quote
    const index = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[index])

    // Set interval to change the quote every 30 minutes
    const intervalId = setInterval(() => {
      const index = Math.floor(Math.random() * quotes.length)
      setQuote(quotes[index])
    }, 30 * 60 * 1000) // 30 minutes in milliseconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      {quote && (
        <div>
          <p>{quote}</p>
        </div>
      )}
    </div>
  )
}

export default QuoteGenerator
