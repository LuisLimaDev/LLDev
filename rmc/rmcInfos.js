// rmcInfos.js

janela = window;
larguraTotal = janela.innerWidth;
alturaTotal = janela.innerHeight;

let root = document.documentElement;
root.style.setProperty('--alturaTotal', alturaTotal - 71 + "px");
root.style.setProperty('--larguraTotal', larguraTotal + "px");
root.style.setProperty('scroll-behavior', 'smooth');

corPadrao1 = 'rgb(191 224 255)';
corPadrao2 = 'rgb(0 5 43)';
corPadrao3 = 'rgb(50 89 128)';

// root.style.setProperty('--corPadrao1', '#075d80');
root.style.setProperty('--corPadrao1', corPadrao1 );
root.style.setProperty('--corPadrao2', corPadrao2 );
root.style.setProperty('--corPadrao3', corPadrao3);
root.style.setProperty('--corBranco1', '#fdfdfd');

root.addEventListener("resize", e => {
	larguraTotal = janela.innerWidth;
	alturaTotal = janela.innerHeight;
	root.style.setProperty('--alturaTotal', alturaTotal - 71 + "px");
	root.style.setProperty('--larguraTotal', larguraTotal + "px");
});