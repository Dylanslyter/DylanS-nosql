const { Thought } = require('../models/Thought'); 

async function getThoughts(req, res) {
  try {
    const thoughts = await Thought.find();
    return res.json({ thoughts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function addThought(req, res) {
  try {
    const { thoughtText, username } = req.body;
    const newThought = new Thought({
      thoughtText,
      username
    });
    await newThought.save();
    return res.json({ thought: newThought });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateThought(req, res) {
  try {
    const { id } = req.params;
    const updatedThought = await Thought.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    return res.json({ thought: updatedThought });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function removeThought(req, res) {
  try {
    const { id } = req.params;
    const deletedThought = await Thought.findByIdAndDelete(id);
    if (!deletedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    return res.json({ thought: deletedThought });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function addReaction(req, res) {
  try {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    thought.reactions.push({ reactionBody, username });
    await thought.save();
    return res.json({ thought });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function removeReaction(req, res) {
  try {
    const { thoughtId, reactionId } = req.params;
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    thought.reactions.id(reactionId).remove();
    await thought.save();
    return res.json({ thought });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { getThoughts, updateThought, addThought, removeThought, addReaction, removeReaction };
