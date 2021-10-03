pipeline {
  agent any
  parameters {
    choice(name: "Version", choices: ['1.0.0', '1.1.0', '1.2.0'], description: '')
    booleanParam(name: 'executeTests', defaultValue: true, description: '')
  }
  stages {
    stage("build") {
      steps {
        echo 'building application'
      }
    }
    
    stage("deploy") {
      when {
        expression {
           params.executeTests
        }
      }
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
