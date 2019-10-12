const getPackageDetails = require('./src/RegistryApiWrapper');

let getDependencies = function(data) {
    return data.dependencies;
};

let printDeps = function (packageName, version) {
    let seenHash = {};
    let printRec = function(packageName, version, depth) {
        getPackageDetails(packageName, function (data) {
            if(!seenHash[packageName]) {
                seenHash[packageName] = true;

                let spaces = "";
                for (let i = 0; i < depth; i++) {
                    spaces += " ";
                }

                console.log(spaces + "└>" + packageName);

                let deps = Object.keys(getDependencies(data));
                if(deps) {
                    deps.forEach((element) => {
                        printRec(element, undefined, depth + 1);
                    });
                }
            }
        }, version)
    };
    printRec(packageName, version, 0);
};

printDeps(process.argv[2], process.argv[3]);

