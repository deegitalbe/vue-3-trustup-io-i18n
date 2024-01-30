#!/usr/bin/env node

require("dotenv").config();
const { generate } = require("./actions/index.cjs");
const { useArgs } = require("./helpers/index.cjs");

const [action] = useArgs();

if (action === "generate") generate();
