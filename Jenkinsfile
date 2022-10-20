node {
	stage('Checkout') {
		checkout scm
	}
	stage('Build') {
		// Run the maven build
		sh 'mvn clean install'
	}
	stage('Test') {
		// Run the mvn test
		sh 'mvn test'
		// Publish JUnit test result report
		junit 'target/surefire-reports/*.xml'
	}

	stage('Deploy') {
		// Run the mvn deploy
		sh 'mvn deploy'
	}
}
