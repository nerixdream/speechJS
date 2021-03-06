(() => {
	//Variables
	const boton = document.querySelector('#boton');
	const resultado = document.querySelector('#resultado');
	const spinner = document.querySelector('#spinner');

	document.addEventListener('DOMContentLoaded', () => {
		boton.addEventListener('click', ejecutarSpeech);
	});

	function ejecutarSpeech() {
		const speechRecognition = webkitSpeechRecognition;
		const reconocimiento = new speechRecognition();

		reconocimiento.start();

		reconocimiento.onstart = () => {
			spinner.style.display = 'block';
			resultado.textContent = '';
		};

		reconocimiento.onspeechend = () => {
			reconocimiento.stop();
		};

		reconocimiento.onresult = (e) => {
			const { transcript } = e.results[0][0];

			spinner.style.display = 'none';

			setTimeout(() => {
				resultado.textContent = transcript;
			}, 300);
		};
	}
})();
