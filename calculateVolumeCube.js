//  Write a program to calculate the volume of a cube. Start with a variable that contains the length of 1 edge in meters.

function calculateVolumeCube(edgeLength) {
    return Math.pow(edgeLength, 3);
}

// Example usage:
const edgeLength = parseFloat(prompt("Enter the length of one edge of the cube in meters:"));

if (edgeLength > 0) {
    const volume = calculateCubeVolume(edgeLength);
    alert(`The volume of the cube is ${volume.toFixed(2)} cubic meters.`);
} else {
    alert("Please enter a valid positive number for the edge length.");
}
