import React from "react";

export function Layout({children}: any) {
    return (
        <>
          <div>
						<header>
							header
						</header>
						<main>
							{children}
						</main>
						<footer>
							footer
						</footer>
          </div>  
        </>
    )
}