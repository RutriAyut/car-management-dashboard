import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { LinkProps } from '../Props';

function CustomBreadcrumb({ links }: LinkProps) {
	return (
		<Breadcrumb>
			{links.map((result, key: number) => {
				if (result.active) {
					return (
						<Breadcrumb.Item key={key} href={result.link} active>
							{result.name}
						</Breadcrumb.Item>
					);
				} else {
					return (
						<Breadcrumb.Item key={key} href={result.link}>
							{result.name}
						</Breadcrumb.Item>
					);
				}
			})}
		</Breadcrumb>
	);
}

CustomBreadcrumb.defaultProps = {
	links: [],
};

export default CustomBreadcrumb;
