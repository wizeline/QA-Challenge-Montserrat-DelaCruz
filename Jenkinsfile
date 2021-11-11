pipeline{
    agent any
    tools { nodejs 'node' }
    stages{

        stage('Install dependencies'){
            steps{
                sh 'npm run deleteReports'
                sh 'npm install'
            }
        }
        
        stage('Run Eslint'){
            steps{
                sh 'npm run lint'
            }
        }

        stage('Scan'){
            environment{
                scanner_home = tool 'sonarQ'
            }
            steps{
                withSonarQubeEnv(installationName: 'sq1'){
                    echo "${scanner_home}"
                    sh "${scanner_home}/bin/sonar-scanner \
                     -Dsonar.projectKey=QA-Challenge"

                }
            }
        }

        stage('Run Backend Tests'){
            steps{
                sh 'npm run backendTests'
            }
        }

        stage('Run Frontend Tests'){
            steps{
                sh 'npm run test:headless'
                sh 'npm run allureReport'
            }
        }
    }
    post{
        aborted{
            slackSend color: "#f3f024", message: "*Build Aborted*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"        }
        failure{
            slackSend color: "#F50407", message: "*Build Failed*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
            slackUploadFile "results/Backend_report.html"
        }
        success{
            slackSend color: "#11cd4b", message: "*Build Passed*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
            slackUploadFile "results/Backend_report.html"
        }
        unstable{
            slackSend color: "#df6805", message: "*Build Unstable*\n Job: ${env.JOB_NAME}\n Build: ${env.BUILD_NUMBER}\n URL: ${env.BUILD_URL}"
        }
    }
}