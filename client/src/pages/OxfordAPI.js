import axios from 'axios';

// const app_id = '4db2f6f9'
// const app_key = 'dd11dafa94d8e6a5df1090478bb81806'
// language = 'en_us'

import React, { useEffect, useState } from 'react';

export default function OxfordAPI() {
	async function fetchData() {
		const response = await axios.get('https://opentdb.com/api.php?amount=10');
		const { data } = response;
		console.log(data);
		return data;
	}
	useEffect(() => {
		fetchData();
	}, []);

	return <div>ok</div>;
}
