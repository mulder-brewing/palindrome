module.exports = Phrase;

//Define  a Phrase object.
function Phrase(content) {
  this.content = content;

  //process string to toLowerCase.
  this.processor = function (string) {
    return string.toLowerCase();
  }

  //Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }


  //Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
