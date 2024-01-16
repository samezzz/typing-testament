import React from "react";

interface CapsLockSnackbarProps {
	open: boolean;
}

const CapsLockSnackbar: React.FC<CapsLockSnackbarProps> = ({ open }) => {
	return (
		<div>
			<div>
				<div>
					{/* Tailwind CSS styles */}
					<div className="bg-yellow-500 p-4 rounded-lg">Caps Locked</div>
				</div>
			</div>
		</div>
	);
};

export default CapsLockSnackbar;
