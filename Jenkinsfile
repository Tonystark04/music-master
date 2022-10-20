node {
	stage('Checkout') {
		checkout scm
	}
	stage('Compile-Package'){
        def mvnHome =  tool name: 'maven3', type: 'maven'   
        sh "${mvnHome}/bin/mvn clean package"
	sh 'mv target/myweb*.war target/newapp.war'
   }
}
	
