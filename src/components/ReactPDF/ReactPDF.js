import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from 'react-to-pdf';
import { FaFileDownload } from 'react-icons/fa';

const ref = React.createRef();

const ReactPDF = () => {
    return (
			<div className='flex'>
				<Pdf targetRef={ref} filename='code-example.pdf'>
					{({ toPdf }) => <button onClick={toPdf}>PDF</button>}
				</Pdf>
				<div className='mt-2' ref={ref}>
					<Link herf='/foldername/file'>
						<FaFileDownload className='text-secondary'></FaFileDownload>
					</Link>
				</div>		
			</div>
		);
};

export default ReactPDF;