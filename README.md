# Constellation - A Turborepo CDK Love Story

For a quick and dirty guide--

## Pull down this repo

Run `git clone https://github.com/genghis/constellation`

Open the folder in your IDE of choice

## Install Dependencies
Run `npm install turbo --global` from the root directory to install the Turborepo manager

Run `npm install` from the root directory

## Make sure you're running Node 18^

Run `nvm use 18`. You may need to download NVM, version 18 of node, or both. But the CDK will yell at you otherwise.

## Create a new Lambda + Gateway

Run `turbo gen` and select the API Gateway + Lambda option

Name it appropriately (or not, I'm not your dad)

## Make code do things

There's a basic lambda in `services/{whatever you named it}/src/{whatever you named it}.ts` that you can hack apart, remove, or add onto in order to play with capabilities. 

To mess with the actual AWS resources, you'll wanna edit `services/{whatever you named it}/stacks/{whatever you named it}Stack.ts`

Finally, if you have application-level things to do (environment-dependant things are the most likely), that's in `services/{whatever you named it}/bin/{whatever you named it}.ts`

## Deploy

Assuming your AWS credentials are set up correctly--

Run `cdk deploy constellation-dev-[service name]` (or `cdk deploy constellation-prod-[service name]`) and follow the prompts

## Adding workspace dependencies

When writing Lambda code, you may need to add libraries and dependencies that are not necessary for the repo as a whole -- in fact, you're really really like to. To do so, you need to follow a sort of annoying pattern:

`npm install [module name] -w [workspace/service name]`

So to install `lodash` for a service we name `greentea`, the command would be:

`npm install lodash -w greentea`

This would add `lodash` to the `package.json` in `orion/services/greentea/` without making it a required dependancy for every other service until the whole repo gets built and deployed. This should keep build times down. 

## Live Lambda Development?

The current solution to developing live serverless projects is to deploy once and then use `cdk watch` to have your machine automatically update only that code which has changed (usually in 3-10 seconds). This allows for rapid iteration, but DOES require an internet connection.

Otherwise, local development for serverless is pretty gross. Lots of mocking and a ton of time spent getting things balanced just right. If possible, we should use `cdk watch` or, if we need a slightly more robust set of helpers, `sst`.
