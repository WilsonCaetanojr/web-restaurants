import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const spinnerRotation = keyframes`
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const Spinner = styled(Image)`
  animation: ${spinnerRotation} 0.5s infinite;
  width: 47px;
  height: 47px;
`;
