function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = strand => {
  let rna = []
  strand.split('').map(letter => {
    switch (letter) {
      case 'G':
        rna.push('C')
        break
      case 'C':
        rna.push('G')
        break
      case 'T':
        rna.push('A')
        break
      case 'A':
        rna.push('U')
        break
      default:
        throw new Error('Invalid input')
    }
  })
  return rna.join('')
}

module.exports = DnaTranscriber
