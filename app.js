(function(){

	//Initialize Firebase//
	const config= {
		apiKey: "AIzaSyAe677gEH-Tb23tuXPTnU1sHQm3RoREcqk",
    	authDomain: "cbbtemp-97a27.firebaseapp.com",
    	databaseURL: "https://cbbtemp-97a27.firebaseio.com",
    	storageBucket: "cbbtemp-97a27.appspot.com",
	};
	firebase.initializeApp(config);

	// Get Elements
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('txtEmail');

	// Add login event
	btnLogin.addEventListener('click', e=> {
		//Get email and pass
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		// Sign in 
		const promise = auth.signInWithEmailAndPassword(email,pass);
		promise.catch(e => console.log(e.message));
	});

	// Add signup event
	btnSignUp.addEventListener('click', e=> {
		// Get email and Pass
		// TODO: check for real email
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		// Sign in 
		const promise = auth.createUserWithEmailAndPassword(email,pass);
		promise
			.catch(e => console.log(e.message));
	});

	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});


	// Add a reatime listener 
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser){
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		} else {
			console.log('not logged in');
			btnLogout.classList.add('hide');
		}
});

});	
