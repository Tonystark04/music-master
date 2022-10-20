node {
	stage('Checkout') {
		checkout scm
	}
	stage('Compile-Package'){

      def mvnHome =  tool name: 'maven3', type: 'maven'   
      sh "${mvnHome}/bin/mvn clean package"
	  sh 'mv target/myweb*.war target/newapp.war'
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
