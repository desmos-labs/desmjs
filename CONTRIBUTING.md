# Contributing

- [Contributing](#contributing)
    - [Pull Requests](#pull-requests)
        - [Requesting Reviews](#requesting-reviews)
        - [Reviewing Pull Requests](#reviewing-pull-requests)
    - [Forking](#forking)
    - [Dependencies](#dependencies)
    - [Protobuf](#protobuf)
    - [Testing](#testing)
    - [Branching Model and Release](#branching-model-and-release)
        - [PR Targeting](#pr-targeting)
        - [Development Procedure](#development-procedure)
        - [Pull Merge Procedure](#pull-merge-procedure)
        - [Release Procedure](#release-procedure)
        - [Point Release Procedure](#point-release-procedure)

Thank you for considering making contributions to DesmJS and related
repositories!

Contributing to this repo can mean many things such as participating in
discussion or proposing code changes. To ensure a smooth workflow for all
contributors, the general procedure for contributing has been established:

1. Either [open](https://github.com/desmos-labs/desmjs/issues/new/choose) or
   [find](https://github.com/desmos-labs/desmjs/issues) an issue you'd like to help with
2. Participate in thoughtful discussion on that issue
3. If you would like to contribute:
    1. If the issue is a proposal, ensure that the proposal has been accepted
    2. Ensure that nobody else has already begun working on this issue. If they have,
       make sure to contact them to collaborate
    3. If nobody has been assigned for the issue and you would like to work on it,
       make a comment on the issue to inform the community of your intentions
       to begin work
    4. Follow standard GitHub best practices: fork the repo, branch from the
       HEAD of `main`, make some commits, and submit a PR to `main`
        - For core developers working within the DesmJS repo, to ensure a clear
          ownership of branches, branches must be named with the convention
          `{moniker}/{issue#}-branch-name`
    5. Be sure to submit the PR in `Draft` mode submit your PR early, even if
       it's incomplete as this indicates to the community you're working on
       something and allows them to provide comments early in the development process
    6. When the code is complete it can be marked `Ready for Review`
    7. Be sure to include a relevant change log entry in the `Unreleased` section
       of `CHANGELOG.md` (see file for log format)

Note that for very small or blatantly obvious problems (such as typos) it is
not required to an open issue to submit a PR, but be aware that for more complex
problems/features, if a PR is opened before an adequate design discussion has
taken place in a GitHub issue, that PR runs a high likelihood of being rejected.

Other notes:

- Looking for a good place to start contributing? How about checking out some
  [good first issues](https://github.com/desmos-labs/desmjs/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)
- Please ensure that your code is lint compliant by running `yarn lint`.
  A convenience git `pre-commit` hook that runs the formatters automatically
  before each commit is available in the `contrib/githooks/` directory.

## Pull Requests

PRs should be categorically broken up based on the type of changes being made (for example, `fix`, `feat`,
`refactor`, `docs`, and so on). The *type* must be included in the PR title as a prefix (for example,
`fix: <description>`). This convention ensures that all changes that are committed to the base branch follow the
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
Additionally, each PR should only address a single issue.

### Requesting Reviews

In order to accommodate the review process, the author of the PR must complete the author checklist
to the best of their abilities before marking the PR as "Ready for Review". If you would like to
receive early feedback on the PR, open the PR as a "Draft" and leave a comment in the PR indicating
that you would like early feedback and tagging whoever you would like to receive feedback from.

### Reviewing Pull Requests

All PRs require at least two review approvals before they can be merged. In addition, use the following review explanations:

- `LGTM` without an explicit approval means that the changes look good, but you haven't thoroughly reviewed the reviewer checklist items.
- `Approval` means that you have completed some or all of the reviewer checklist items. If you only reviewed selected items, you must add your handle next to the items that you have reviewed. In addition, follow these guidelines:
    - You must also think through anything which ought to be included but is not
    - You must think through whether any added code could be partially combined (DRYed) with existing code
    - You must think through any potential security issues or incentive-compatibility flaws introduced by the changes
    - Naming must be consistent with conventions and the rest of the codebase
    - Code must live in a reasonable location, considering dependency structures (for example, not importing testing modules in production code, or including example code modules in production code).
    - If you approve the PR, you are responsible for any issues mentioned here and any issues that should have been addressed after thoroughly reviewing the reviewer checklist items in the pull request template.
- If you sat down with the PR submitter and did a pairing review, add this information in the `Approval` or your PR comments.
- If you are only making "surface level" reviews, submit any notes as `Comments` without adding a review.

## Dependencies

We use [Yarn 3](https://yarnpkg.com/getting-started/usage) to manage dependency versions.  

All the code is written using [Typescript 4.5](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html).

## Protobuf

We use [Protocol Buffers](https://developers.google.com/protocol-buffers) along with [ts-proto](https://github.com/stephenh/ts-proto) to generate code for use in DesmJS.

In order for imports to properly compile in your IDE, you may need to manually set your protobuf path in your IDE's workspace settings/config.

For example, in vscode your `.vscode/settings.json` should look like:

```
{
    "protoc": {
        "options": [
        "--proto_path=${workspaceRoot}/packages/types/proto",
        ]
    }
}
```

## Branching Model and Release

User-facing repos should adhere to the [trunk based development branching model](https://trunkbaseddevelopment.com/).

Libraries need not follow the model strictly, but would be wise to.

DesmJS utilizes [semantic versioning](https://semver.org/).

### PR Targeting

Ensure that you base and target your PR on the `main` branch.

All feature additions should be targeted against `main`. Bug fixes for an outstanding release candidate
should be targeted against the release candidate branch.

### Development Procedure

- the latest state of development is on `main`
- `main` must never fail tests
- `main` should not fail linting
- no `--force` onto `main` (except when reverting a broken commit, which should seldom happen)
- create a development branch either on github.com/desmos-labs/desmjs, or your fork (using `git remote add origin`)
- before submitting a pull request, begin `git rebase` on top of `main`

### Pull Merge Procedure

- ensure pull branch is rebased on `main`
- run `yarn test` to ensure that all tests pass
- merge pull request

### Release Procedure

- Start on `main`
- Create the release branch (`release/vX.XX.X`) from the `main` branch
- Create a PR to `main` to incorporate the `CHANGELOG.md` updates
- Tag the release (use `git tag -a`) and create a release in GitHub

### Point Release Procedure

At the moment, only a single major release will be supported, so all point releases will be based
off of that release.

In order to alleviate the burden for a single person to have to cherry-pick and handle merge conflicts
of all desired backporting PRs to a point release, we instead maintain a living backport branch, where
all desired features and bug fixes are merged into as separate PRs.

Example:

Current release is `v1.0.1`. We then maintain a (living) branch `sru/release/v1.0.N`, given N as
the next patch release number (currently `1.0.2`) for the `1.0` release series. As bugs are fixed
and PRs are merged into `main`, if a contributor wishes the PR to be released as SRU into the
`v1.0.N` point release, the contributor must:

1. Add `1.0.N-backport` label
2. Pull latest changes on the desired `sru/release/vX.X.N` branch
3. Create a 2nd PR merging the respective SRU PR into `sru/release/v1.0.N`
4. Update the PR's description and ensure it contains the following information:
    - **[Impact]** Explanation of how the bug affects users or developers.
    - **[Test Case]** section with detailed instructions on how to reproduce the bug.
    - **[Regression Potential]** section with a discussion how regressions are most likely to manifest, or might
      manifest even if it's unlikely, as a result of the change. **It is assumed that any SRU candidate PR is
      well-tested before it is merged in and has an overall low risk of regression**.

It is the PR's author's responsibility to fix merge conflicts, update changelog entries, and
ensure CI passes. If a PR originates from an external contributor, it may be a core team member's
responsibility to perform this process instead of the original author.
Lastly, it is core team's responsibility to ensure that the PR meets all the SRU criteria.

Finally, when a point release is ready to be made:

1. Create `release/v1.0.N` branch
2. Ensure changelog entries are verified
    1. Be sure changelog entries are added to `RELEASE_CHANGELOG.md`
3. Add release version date to the changelog
4. Push release branch along with the annotated tag: **git tag -a**
5. Create a PR into `main` containing ONLY `CHANGELOG.md` updates
    1. Do not push `RELEASE_CHANGELOG.md` to `master`

Note, although we aim to support only a single release at a time, the process stated above could be
used for multiple previous versions.
