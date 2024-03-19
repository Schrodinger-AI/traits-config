function formatTrait(trait_arg) {
    return trait_arg.traitType + ': ' + trait_arg.value
}


function createPrompt(config, trait_args) {
    var traitsFormatted = trait_args.map(formatTrait);
    prompt = config.prefix + traitsFormatted.join('\n') + '\n'
    prompt = prompt + ' The image should contain the full-body shot of the main character.'
    prompt = prompt + ' The image should contain one and only one cat.'
    prompt = prompt + ' The generated image should not contain any text or labels.'
    return prompt;
}
