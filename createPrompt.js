
var contentPolicyViolationWordsReplacements = {
    "Aladdin Pants": "Flowy Harem Pants"
}

function formatTrait(trait_arg) {
    return trait_arg.traitType + ': ' + (contentPolicyViolationWordsReplacements[trait_arg.value] || trait_arg.value);
}


function createPrompt(config, trait_args) {
    var traitsFormatted = trait_args.map(formatTrait);
    prompt = config.prefix + traitsFormatted.join(', ')
    return prompt;
}
