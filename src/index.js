// Lib
const LowBot = require('lowbot');

// Classifiers
const IntentClassification = require('eduir');
const DesireClassification = require('intent-desire');

// Adapters
const Terminal = require('lowbot-terminal');

// Skills
const intents = require('./build/intents.json').intents;
const BasicSkill = require('basic-skillset');

// Personalities
const chars = require('./chars.json');

/**
  * Bot instance
  */
let botInstance = new LowBot(intents)
  /**
    * Classifiers
    */
  .applyDesireClassifier(DesireClassification)
  .applyIntentClassifier(IntentClassification)
  /**
    * Adapters
    */
  .useAdapter(Terminal)
  /**
    * Skills
    */
  .addSkill(BasicSkill) // Basic skill
  /**
    * Personality
    */
  .personaInherit('Bot', chars, false, true) // Set persona as default personality if not set, inherit persona from last set, allow persona switching
  /**
    * Build and launch
    */
  .build(false).then((bot) => { // Automatically build if needed when bot script executed
    bot.init(); // Initialise bot instance (wake up)
  });
