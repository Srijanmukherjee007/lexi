import DrawSVG from 'react-svg-drawing';
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function AnimatedLogo() {
	useEffect(() => {
		anime({
			targets: '.text_svg path',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 10000,
			loop: false,
		});
	});
	return (
		// <DrawSVG targets=".text_svg path" easing="easeInOutQuad" duration={10000}>
		<svg className="text_svg" height={176} width={374}>
			<path
				strokeWidth={1.5}
				d="M34 3H37V0H34V3ZM34 165V168H37V165H34ZM7 165H4V168H7V165ZM7 3V0H4V3H7ZM31 3V165H37V3H31ZM34 162H7V168H34V162ZM10 165V3H4V165H10ZM7 6H34V0H7V6ZM80.125 111V108H76.3108L77.2094 111.707L80.125 111ZM140.594 127.312L142.715 125.191L140.594 123.07L138.472 125.191L140.594 127.312ZM159.719 146.438L161.84 148.559L163.961 146.438L161.84 144.316L159.719 146.438ZM177.156 111V114H179.646L180.105 111.553L177.156 111ZM146.219 84V87H151.388L148.823 82.5116L146.219 84ZM83.7812 84L81.1765 82.5116L78.6117 87H83.7812V84ZM77.2094 111.707C78.8474 118.463 82.2799 124.429 87.4256 129.574L91.6682 125.332C87.2514 120.915 84.4026 115.912 83.0406 110.293L77.2094 111.707ZM87.4256 129.574C95.019 137.168 104.266 141 115 141V135C105.859 135 98.1372 131.801 91.6682 125.332L87.4256 129.574ZM115 141C125.734 141 134.981 137.168 142.574 129.574L138.332 125.332C131.863 131.801 124.141 135 115 135V141ZM142.574 129.574L142.715 129.434L138.472 125.191L138.332 125.332L142.574 129.574ZM138.472 129.434L157.597 148.559L161.84 144.316L142.715 125.191L138.472 129.434ZM157.597 144.316L157.457 144.457L161.699 148.699L161.84 148.559L157.597 144.316ZM157.457 144.457C145.741 156.173 131.645 162 115 162V168C133.23 168 148.853 161.546 161.699 148.699L157.457 144.457ZM115 162C98.3546 162 84.2593 156.173 72.5432 144.457L68.3006 148.699C81.1469 161.546 96.7704 168 115 168V162ZM72.5432 144.457C60.8271 132.741 55 118.645 55 102H49C49 120.23 55.4542 135.853 68.3006 148.699L72.5432 144.457ZM55 102C55 85.3546 60.8271 71.2593 72.5432 59.5432L68.3006 55.3006C55.4542 68.1469 49 83.7704 49 102H55ZM72.5432 59.5432C84.2593 47.8271 98.3546 42 115 42V36C96.7704 36 81.1469 42.4542 68.3006 55.3006L72.5432 59.5432ZM115 42C131.645 42 145.741 47.8271 157.457 59.5432L161.699 55.3006C148.853 42.4542 133.23 36 115 36V42ZM157.457 59.5432C169.173 71.2593 175 85.3546 175 102H181C181 83.7704 174.546 68.1469 161.699 55.3006L157.457 59.5432ZM175 102C175 104.811 174.737 107.626 174.208 110.447L180.105 111.553C180.701 108.374 181 105.189 181 102H175ZM177.156 108H169V114H177.156V108ZM169 108H80.125V114H169V108ZM148.823 82.5116C147.179 79.634 145.089 76.9399 142.574 74.4256L138.332 78.6682C140.505 80.8414 142.258 83.116 143.614 85.4884L148.823 82.5116ZM142.574 74.4256C134.981 66.8321 125.734 63 115 63V69C124.141 69 131.863 72.1992 138.332 78.6682L142.574 74.4256ZM115 63C104.266 63 95.019 66.8321 87.4256 74.4256L91.6682 78.6682C98.1372 72.1992 105.859 69 115 69V63ZM87.4256 74.4256C84.9112 76.9399 82.8209 79.634 81.1765 82.5116L86.386 85.4884C87.7416 83.116 89.495 80.8414 91.6682 78.6682L87.4256 74.4256ZM83.7812 87H146.219V81H83.7812V87ZM243.109 102L245.512 103.797L246.855 102L245.512 100.203L243.109 102ZM196 39V36H190.011L193.597 40.7966L196 39ZM227.922 39L230.326 37.2052L229.426 36H227.922V39ZM259 80.625L256.596 82.4198L259 85.6395L261.404 82.4198L259 80.625ZM290.078 39V36H288.574L287.674 37.2052L290.078 39ZM322 39L324.405 40.7931L327.979 36H322V39ZM275.031 102L272.626 100.207L271.289 102L272.626 103.793L275.031 102ZM322 165V168H327.979L324.405 163.207L322 165ZM290.078 165L287.674 166.795L288.574 168H290.078V165ZM259 123.375L261.404 121.58L259 118.361L256.596 121.58L259 123.375ZM227.922 165V168H229.426L230.326 166.795L227.922 165ZM196 165L193.597 163.203L190.011 168H196V165ZM245.512 100.203L198.403 37.2034L193.597 40.7966L240.707 103.797L245.512 100.203ZM196 42H227.922V36H196V42ZM225.518 40.7948L256.596 82.4198L261.404 78.8302L230.326 37.2052L225.518 40.7948ZM261.404 82.4198L292.482 40.7948L287.674 37.2052L256.596 78.8302L261.404 82.4198ZM290.078 42H322V36H290.078V42ZM319.595 37.2069L272.626 100.207L277.436 103.793L324.405 40.7931L319.595 37.2069ZM272.626 103.793L319.595 166.793L324.405 163.207L277.436 100.207L272.626 103.793ZM322 162H290.078V168H322V162ZM292.482 163.205L261.404 121.58L256.596 125.17L287.674 166.795L292.482 163.205ZM256.596 121.58L225.518 163.205L230.326 166.795L261.404 125.17L256.596 121.58ZM227.922 162H196V168H227.922V162ZM198.403 166.797L245.512 103.797L240.707 100.203L193.597 163.203L198.403 166.797ZM367 39H370V36H367V39ZM367 165V168H370V165H367ZM340 165H337V168H340V165ZM340 39V36H337V39H340ZM364 39V165H370V39H364ZM367 162H340V168H367V162ZM343 165V39H337V165H343ZM340 42H367V36H340V42ZM353.5 27C350.537 27 348.115 25.9972 346.059 23.9412L341.816 28.1838C345.01 31.3778 348.963 33 353.5 33V27ZM346.059 23.9412C344.003 21.8852 343 19.4634 343 16.5H337C337 21.0366 338.622 24.9898 341.816 28.1838L346.059 23.9412ZM343 16.5C343 13.5366 344.003 11.1148 346.059 9.05882L341.816 4.81618C338.622 8.01018 337 11.9634 337 16.5H343ZM346.059 9.05882C348.115 7.00282 350.537 6 353.5 6V0C348.963 0 345.01 1.62218 341.816 4.81618L346.059 9.05882ZM353.5 6C356.463 6 358.885 7.00282 360.941 9.05882L365.184 4.81618C361.99 1.62218 358.037 0 353.5 0V6ZM360.941 9.05882C362.997 11.1148 364 13.5366 364 16.5H370C370 11.9634 368.378 8.01018 365.184 4.81618L360.941 9.05882ZM364 16.5C364 19.4634 362.997 21.8852 360.941 23.9412L365.184 28.1838C368.378 24.9898 370 21.0366 370 16.5H364ZM360.941 23.9412C358.885 25.9972 356.463 27 353.5 27V33C358.037 33 361.99 31.3778 365.184 28.1838L360.941 23.9412Z"
				fill="none"
			/>
		</svg>
		// </DrawSVG>
	);
}