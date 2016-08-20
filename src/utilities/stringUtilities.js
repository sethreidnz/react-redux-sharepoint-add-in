export const replaceMergeTags = (content, mergeTags) => {
  let parsedContent = ''
  mergeTags.map((mergeTag) => {
    parsedContent += this.replaceSingleMergeTag(content, mergeTag.tag, mergeTag.replacement)
  })
  return parsedContent
}

export const replaceSingleMergeTag = (content, tag, replacement) => {
  var parsedContent = this.replaceAllSubstring(content, tag, replacement)
  return parsedContent
}

export const replaceAllSubstring = (targetString, substring, replacementString) => {
  const regex = new RegExp(this.escapeRegExp(substring), 'g')
  return targetString.replace(regex, replacementString)
}

export const escapeRegExp = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}
