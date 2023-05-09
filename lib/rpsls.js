export function rps(playerShot) {

	const options = ['rock', 'paper', 'scissors'];
  

	if (playerShot === undefined) {
	  const randomIndex = Math.floor(Math.random() * options.length);
	  const randomShot = options[randomIndex];
	  return {"player": randomShot};
	}
	else {

	  const normalizedShot = playerShot.toLowerCase();
  

	  if (!options.includes(normalizedShot)) {
		return 'error';
	  }
	  else {

		const randomIndex = Math.floor(Math.random() * options.length);
		const opponentShot = options[randomIndex];
  

		let result = 'tie';
		if (normalizedShot === 'rock') {
		  if (opponentShot === 'paper') {
			result = 'lose';
		  }
		  else if (opponentShot === 'scissors') {
			result = 'win';
		  }
		}
		else if (normalizedShot === 'paper') {
		  if (opponentShot === 'rock') {
			result = 'win';
		  }
		  else if (opponentShot === 'scissors') {
			result = 'lose';
		  }
		}
		else if (normalizedShot === 'scissors') {
		  if (opponentShot === 'rock') {
			result = 'lose';
		  }
		  else if (opponentShot === 'paper') {
			result = 'win';
		  }
		}
  
	
		return {'player': normalizedShot, 'opponent': opponentShot, 'result': result};
	  }
	}
  }
  
  
  
  export function rpsls(shot) {

	const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
	

	if (shot === undefined) {
		return {"player": options[Math.floor(Math.random()*options.length)]};
	} 
	

	shot = shot.toLowerCase();
	if (!options.includes(shot)) {
		return 'error';
	}
	

	var opponent = options[Math.floor(Math.random()*options.length)];
	
	var result = 'tie';
	if (shot === 'rock') {
		if (opponent === 'paper' || opponent === 'spock') {
			result = 'lose';
		}
		else if (opponent === 'scissors' || opponent === 'lizard') {
			result = 'win';
		}
	}
	else if (shot === 'paper') {
		if (opponent === 'rock' || opponent === 'spock') {
			result = 'win';
		}
		else if (opponent === 'scissors' || opponent === 'lizard') {
			result = 'lose';
		}
	}
	else if (shot === 'scissors') {
		if (opponent === 'rock' || opponent === 'spock') {
			result = 'lose';
		}
		else if (opponent === 'paper' || opponent === 'lizard') {
			result = 'win';
		}
	}
	else if (shot === 'lizard') {
		if (opponent === 'rock' || opponent === 'scissors') {
			result = 'lose';
		}
		else if (opponent === 'spock' || opponent === 'paper') {
			result = 'win';
		}
	}
	else if (shot === 'spock') {
		if (opponent === 'paper' || opponent === 'lizard') {
			result = 'lose';
		}
		else if (opponent === 'rock' || opponent === 'scissors') {
			result = 'win';
		}
	}
	

	if (shot === 'spock') {
		shot = 'Spock';
	}
	if (opponent === 'spock') {
		opponent = 'Spock';
	}    
	

	return {'player': shot, 'opponent': opponent, 'result': result};
  }