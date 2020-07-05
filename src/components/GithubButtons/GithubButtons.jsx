import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/jokale"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork jokale/gatsby-simplefolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/jokale"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star jokale/gatsby-simplefolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
