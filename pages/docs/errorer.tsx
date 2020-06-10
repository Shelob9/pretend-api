import { Layout } from "../index";
import Head from "next/head";
import React from "react";
import fetch from "cross-fetch";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
//https://stackoverflow.com/a/1714899
function stringifyQuery(obj: any) {
	var str = [];
	var str = [];
	for (var p in obj) {
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		}
	}
	return str.join("&");
}

export default function () {
	return (
		<Layout pageTitle="Errorer Routs" pageSubTitle={" Documentation"}>
			<div className="grid">
				<div className="card full">
					<h2>Documentation</h2>
					<ul>
						<li>
							<pre>GET /api/errorer</pre>
							<pre>POST /api/errorer</pre>
							<pre>DELETE /api/errorer</pre>
							<pre>PUT /api/errorer</pre>
						</li>
						<ul>
							<li>
								Responds with status code 500 and the body{" "}
								{JSON.stringify({ message: "Deleted." })}
							</li>
						</ul>
					</ul>
				</div>
			</div>
		</Layout>
	);
}
