import { response } from 'express'

// importing packages
const express = require('express')
const router = express.Router()
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
})
const openai = new OpenAIApi(configuration)


router.post('/', async (req, res) => {
    const question = req.body.question;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: question,
    temperature: 0.9,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: [' Human:', ' AI:'],
  })
  try {
    let result = await response
    result = await result.data.choices[0].text
    res.status(200).json(result)
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: `Internal Server Error.` })
  }
  console.log(response.data.choices[0].text)
})

module.exports = router
