#!/usr/bin/env groovy
def jenkinsfile

def overrides = [
    scriptVersion  : 'v7',
    pipelineScript: 'https://git.aurora.skead.no/scm/ao/aurora-pipeline-scripts.git',
    iqOrganizationName: "Team Supernova",
    iqBreakOnUnstable: true,
    iqEmbedded: false,
    manualReleaseEnabled: true,
    versionStrategy: [
      [ branch: 'master', versionHint: '1']
    ],
    sonarQube: true,
    npmInstallCommand: "ci",
    uploadLeveransepakke: true,
    nodeVersion: "16",
    lineCoverageReport: false,
    iqEmbedded: true,
]

fileLoader.withGit(overrides.pipelineScript, overrides.scriptVersion) {
  jenkinsfile = fileLoader.load('templates/webleveransepakke')
}

jenkinsfile.run(overrides.scriptVersion, overrides)
