# Palindrome Game

Let's create a program that given a list of names (words), counts the number of palindromes made from combining them in different ways.

## Assumptions:

* since we are using names, only alpha characters should be considered, not alphanumeric
* palindrome evaluation is case insensitive
* 'tom mot' counts separately than 'mot tom' even though it involves the same two people, order counts (permutation)
* generally speaking, good data will be provided
* reasonable test cases should be provided

## Requirements

* node (see below)
* jasmine-node (for unit tests)

## Node

Install node version manager https://github.com/creationix/nvm by following those instructions, specifically the curl or wget command:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
```

The project uses node 8.1.3. Install it with nvm using the following command :

```
nvm install 8.1.3
```

From the project root in terminal session install project dependencies with the following command:

```
npm install
```


## Unit tests

Install jasmine-node

```
sudo npm install jasmine-node -g
```

Then from the project root run test with:

```
npm test
```

## Running the app

* install node via directions above
* from terminal in the root project run the command:
```
node main.js
```
