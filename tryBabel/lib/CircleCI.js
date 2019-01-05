"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadBuildArtifacts = loadBuildArtifacts;
exports.loadLatestBuildNumberForBranch = loadLatestBuildNumberForBranch;

var _unfetch = _interopRequireDefault(require("unfetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function sendRequest(repo, uri) {
  const urlRepo = repo && repo.length ? repo : "babel/babel";
  const fullURL = `https://circleci.com/api/v1.1/project/github/${urlRepo}/${uri}`;
  let response;

  try {
    response = await (0, _unfetch.default)(fullURL).then(res => res.json());
  } catch (ex) {
    throw new Error(`Error sending request to CircleCI: ${ex.message}`);
  } // CircleCI sometimes returns errors as 200 (OK) responses with a "message"
  // field...


  if (response.message) {
    throw new Error(response.message);
  }

  return response;
}

async function loadBuildArtifacts(repo, regExp, build, cb // eslint-disable-line no-unused-vars
) {
  try {
    const response = await sendRequest(repo, `${build}/artifacts`);
    const artifacts = response.filter(x => regExp.test(x.path));

    if (!artifacts || artifacts.length === 0) {
      throw new Error(`Could not find valid babel-standalone artifact in build #${build}`);
    }

    return artifacts[0].url;
  } catch (ex) {
    throw new Error(`Could not load Babel build #${build}: ${ex.message}`);
  }
}

async function loadLatestBuildNumberForBranch(repo, branch) {
  try {
    const response = await sendRequest(repo, `tree/${branch}?limit=1&filter=successful`);

    if (!response || !response.length) {
      throw new Error("No builds found");
    }

    return response[0].build_num;
  } catch (ex) {
    throw new Error(`Could not load latest Babel build on ${branch}: ${ex.message}`);
  }
}