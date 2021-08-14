# setup-workflow action
Javascript action for setting up workflow.
In order to deploy your workflow, you should use with [this action](https://github.com/ad-m/github-push-action) and [this action](https://github.com/marketplace/actions/create-pull-request)

## parameters
|     name     | required | default |                                 description                                 |
| ------------ | -------- | ------- | --------------------------------------------------------------------------- |
| template     | true     |         | path to the template workflow                                               |
| parameters   | false    | {}      | parameters described in workflow $parameter.key in json format {key, value} |
| project_path | true     |         | path to the git project you want to setup your workflow                     |