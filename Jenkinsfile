def gv
pipeline {
  agent any
  parameters {
    choice(name: "Version", choices: ['1.0.0', '1.1.0', '1.2.0'], description: '')
    booleanParam(name: 'Run Test', defaultValue: true, description: '')
  }
  stages {
    stage("init") {
      steps {
        script {
          gv = load "script.groovy"
        }
      }
    }

    stage("build") {
      steps {
        script {
          gv.buildApp()
        }
      }
    }
    
    stage("deploy") {
      steps {
        echo 'deploy application'
      }
    }
    
    stage("run") {
      steps {
        echo 'run application'
      }
    }
  }
}
