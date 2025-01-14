import core from '@actions/core'

export async function approve (octokit, repo, { number }) {
  await octokit.pulls.createReview({
    ...repo,
    pull_number: number,
    event: 'APPROVE'
  })
}

export async function merge (octokit, repo, { number }) {
  await octokit.pulls.merge({
    ...repo,
    pull_number: number,
    merge_method: 'rebase'
  })
}
