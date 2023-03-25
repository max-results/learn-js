function checkConfig(config) {
    if (!config.host) {
        console.error("Configuration is missing 'host' parameter!");
        process.exit(1);
    }
}

checkConfig(false);