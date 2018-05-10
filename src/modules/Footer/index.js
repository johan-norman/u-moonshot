import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box } from 'grid-styled';
import Container from '../../components/Container';

import './style.css';

const Footer = () => {
	return (
		<footer id="footer">
			<Container>
				<Flex flexDirection={['column']} >
					<Box width={[1, 1, 3/4, 1/2]}>
						<Flex justifyContent={'space-between'}>
							<Box><Link to="/karriar">Karriär</Link></Box>
							<Box><Link to="/arbetsmiljo">Arbetsmiljö</Link></Box>
							<Box><Link to="/fortroendevald">Förtroendevald</Link></Box>
							<Box><Link to="/bli-medlem">Bli medlem</Link></Box>
						</Flex>
					</Box>
				</Flex>
				<Flex flexDirection={['column', 'unset']}>
					<Box width={[1, 1/4, 1/5, 1/5]} mr={30} className="footer-box">
						<Link to="/profil">
							<h4>Mina val</h4>
							<p>Se de valen du har gjort.</p>
						</Link>
					</Box>
					<Box width={[1, 1/4, 1/5, 1/5]} className="footer-box">
						<Link to="/profil">
							<h4>Mina val</h4>
							<p>Se de valen du har gjort.</p>
						</Link>
					</Box>
				</Flex>
			</Container>
		</footer>
	);
}

export default Footer;