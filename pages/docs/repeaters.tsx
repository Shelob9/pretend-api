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
	const [reqBody, setReqBody] = React.useState<any>({ hi: "roy" });
	const [resBody, setResBody] = React.useState<any>({ hi: "Roy" });
	const [requestMethod, setRequestMethod] = React.useState<
		"GET" | "POST" | "PUT" | "DELETE"
	>("GET");

	const [status, setStatus] = React.useState<number>(0);
	const handler = (e) => {
		e.preventDefault();
		let url = `/api/repeater`;
		let body = null;
		setResBody({});
		setStatus(1);
		if ("GET" === requestMethod) {
			url = `${url}?${stringifyQuery(reqBody)}`;
		} else {
			body = JSON.stringify(reqBody);
		}

		fetch(url, {
			method: requestMethod,
			body,
			headers:
				"GET" !== requestMethod
					? {
							"Content-Type": "application/json",
					  }
					: {},
		})
			.then((r) => {
				setStatus(r.status);
				return r.json();
			})
			.then((r) => {
				if ("string" === typeof r.body) {
					setResBody(JSON.parse(r.body));
				} else {
					setResBody(r.body);
				}
			});
	};
	return (
		<Layout pageTitle="Repeater Routs" pageSubTitle={"Demo And Documentation"}>
			<div className="grid">
				<div className="card full">
					<h2>Demo</h2>
					<div className="card ">
						<h3>Request</h3>
						<form onSubmit={handler}>
							<label htmlFor={"method"}>Request Method</label>

							<select
								value={requestMethod}
								onChange={(e) =>
									setRequestMethod(
										e.target.value as "GET" | "POST" | "PUT" | "DELETE"
									)
								}
							>
								{["GET", "POST", "PUT", "DELETE"].map((method: string) => (
									<option key={method} value={method}>
										{method}
									</option>
								))}
							</select>
							<input type={"submit"} value={"Send"} onClick={handler} />

							<label>Request Body</label>
							<JSONInput
								placeholder={{ hi: "roy" }}
								id="req-body"
								theme={"dark_vspre_tribute"}
								locale={locale}
								onChange={(update) => setReqBody(JSON.parse(update.json))}
								height={200}
							/>
						</form>
					</div>
					<div className="card ">
						<h3>Response </h3>
						{status ? <strong>Status: {status}</strong> : null}
						<JSONInput
							id="res-body"
							placeholder={resBody}
							theme={"dark_vspre_tribute"}
							locale={locale}
							height={200}
						/>
					</div>
				</div>
				<div className="card full">
					<h2>Documentation</h2>
					<ul>
						<li>
							<pre>GET /api/repeater</pre>
						</li>
						<ul>
							<li>
								Responds with status pre 200, and request query string in body.
							</li>
						</ul>
						<li>
							<pre>POST /api/repeater</pre>
						</li>
						<li>
							<pre>PUT /api/repeater</pre>
						</li>
						<ul>
							<li>Responds with status pre 201, and query string in body.</li>
						</ul>
						<li>
							<pre>DELETE /api/repeater</pre>
						</li>
						<ul>
							<li>
								Responds with status pre 204 and the body{" "}
								{JSON.stringify({ message: "Deleted." })}
							</li>
						</ul>
					</ul>
				</div>
			</div>
		</Layout>
	);
}
