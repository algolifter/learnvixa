export type Probability = "High" | "Medium" | "Important";

export interface PredictedQuestion {
  text: string;
  marks: number;
  probability: Probability;
  type: "2mark" | "3mark" | "5mark" | "hots" | "assertion";
}

// Key: "subjectId-chapterId"
const questionsRegistry: Record<string, PredictedQuestion[]> = {};

// ===================== PHYSICS =====================

questionsRegistry["physics-1"] = [
  { text: "State Coulomb's law in electrostatics. Express it in vector form.", marks: 2, probability: "High", type: "2mark" },
  { text: "Define electric flux. Write its SI unit.", marks: 2, probability: "High", type: "2mark" },
  { text: "What is the electric field at the centre of a uniformly charged ring? Why?", marks: 2, probability: "Medium", type: "2mark" },
  { text: "A charge q is placed at the centre of a cube. What is the total flux through the cube?", marks: 2, probability: "High", type: "2mark" },
  { text: "State Gauss's law in electrostatics. Name the physical quantity whose surface integral appears in it.", marks: 2, probability: "Important", type: "2mark" },
  { text: "Two point charges +q and –q are placed at a distance d apart. Draw the electric field lines.", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Why do electric field lines never cross each other?", marks: 2, probability: "High", type: "2mark" },
  { text: "Using Gauss's law, derive the expression for electric field due to an infinitely long straight uniformly charged wire.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive an expression for the electric field at a point on the axial line of an electric dipole.", marks: 3, probability: "High", type: "3mark" },
  { text: "State Gauss's theorem. Using it, find the electric field due to a uniformly charged thin spherical shell at (i) outside and (ii) inside the shell.", marks: 5, probability: "High", type: "5mark" },
  { text: "Derive an expression for the torque experienced by an electric dipole placed in a uniform electric field. Hence define electric dipole moment.", marks: 5, probability: "High", type: "5mark" },
  { text: "Using Gauss's law, derive the expression for electric field due to a uniformly charged infinite plane sheet.", marks: 3, probability: "Important", type: "3mark" },
  { text: "Draw the electric field lines for (i) a positive point charge, (ii) a dipole, (iii) two equal positive charges. List two properties of electric field lines.", marks: 3, probability: "Medium", type: "3mark" },
  { text: "Define electric dipole moment. Derive an expression for the electric field at a point on the equatorial plane of a dipole.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: The electric flux through a closed surface is zero if no charge is enclosed.\nReason: Gauss's law relates flux to the enclosed charge.\nSelect the correct option: (a) Both true, R explains A (b) Both true, R doesn't explain A (c) A true, R false (d) A false, R true", marks: 1, probability: "High", type: "assertion" },
  { text: "HOTS: A metallic sphere is placed in a uniform external electric field. How does the electric field inside the sphere compare to the external field? Explain using the concept of electrostatic shielding.", marks: 5, probability: "Medium", type: "hots" },
];

questionsRegistry["physics-2"] = [
  { text: "Define electric potential at a point. Write its SI unit.", marks: 2, probability: "High", type: "2mark" },
  { text: "What is an equipotential surface? Give one example.", marks: 2, probability: "High", type: "2mark" },
  { text: "Why is the work done in moving a charge along an equipotential surface zero?", marks: 2, probability: "Important", type: "2mark" },
  { text: "Define capacitance of a capacitor. On what factors does the capacitance of a parallel plate capacitor depend?", marks: 2, probability: "High", type: "2mark" },
  { text: "Write the expression for energy stored in a charged capacitor. Express it in three different forms.", marks: 2, probability: "Medium", type: "2mark" },
  { text: "A capacitor of capacitance C is charged to potential V and then disconnected. It is connected to another uncharged capacitor of same capacitance. Find the common potential.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive an expression for the potential at a point due to an electric dipole.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive the expression for the capacitance of a parallel plate capacitor with a dielectric slab of thickness t (t < d) between the plates.", marks: 3, probability: "Important", type: "3mark" },
  { text: "Derive an expression for the effective capacitance when capacitors are connected in (a) series (b) parallel.", marks: 5, probability: "High", type: "5mark" },
  { text: "Derive the expression for capacitance of a parallel plate capacitor. How does the capacitance change when a dielectric medium is introduced?", marks: 5, probability: "High", type: "5mark" },
  { text: "Obtain the expression for potential energy of a system of two charges in an external electric field.", marks: 5, probability: "Medium", type: "5mark" },
  { text: "Assertion: The capacitance of a parallel plate capacitor increases on introducing a dielectric between the plates.\nReason: The dielectric reduces the electric field between the plates.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
  { text: "HOTS: Two parallel plate capacitors of capacitances C₁ and C₂ are connected in series across a battery of emf V. Find the ratio of charges on the two capacitors and the ratio of potential differences across them.", marks: 3, probability: "Medium", type: "hots" },
];

questionsRegistry["physics-3"] = [
  { text: "State Kirchhoff's rules for electrical networks.", marks: 2, probability: "High", type: "2mark" },
  { text: "Define drift velocity. Establish its relation with current.", marks: 2, probability: "High", type: "2mark" },
  { text: "State Ohm's law. Write it in vector form (current density form).", marks: 2, probability: "Important", type: "2mark" },
  { text: "Define resistivity. How does it vary with temperature for (i) conductors (ii) semiconductors?", marks: 2, probability: "High", type: "2mark" },
  { text: "What is the difference between emf and terminal voltage of a cell?", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Using Kirchhoff's rules, find the current in each branch of the Wheatstone bridge.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive the condition for balance in a Wheatstone bridge.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive an expression for drift velocity of electrons in a conductor. Hence obtain Ohm's law.", marks: 5, probability: "High", type: "5mark" },
  { text: "State Kirchhoff's rules. Apply them to determine the current in each branch of the given network.", marks: 5, probability: "High", type: "5mark" },
  { text: "Derive expressions for the equivalent resistance of resistors connected in (a) series (b) parallel.", marks: 5, probability: "Important", type: "5mark" },
  { text: "Explain the working of a metre bridge. How is it used to determine the resistance of a wire?", marks: 3, probability: "Medium", type: "3mark" },
  { text: "Assertion: A potentiometer is preferred over a voltmeter for measuring emf of a cell.\nReason: A potentiometer draws no current from the cell at the balance point.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
  { text: "HOTS: Two cells of emf E₁ and E₂ and internal resistances r₁ and r₂ are connected in parallel across an external resistance R. Derive the expression for current through R.", marks: 5, probability: "Medium", type: "hots" },
];

questionsRegistry["physics-4"] = [
  { text: "State the Biot-Savart law. Express it in vector form.", marks: 2, probability: "High", type: "2mark" },
  { text: "State Ampere's circuital law.", marks: 2, probability: "High", type: "2mark" },
  { text: "Define one ampere using the force between two parallel current-carrying conductors.", marks: 2, probability: "Important", type: "2mark" },
  { text: "A charged particle enters a uniform magnetic field perpendicular to its direction. What is the shape of its path? Derive the expression for its radius.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive an expression for the force per unit length between two long straight parallel conductors carrying currents.", marks: 3, probability: "High", type: "3mark" },
  { text: "Using Biot-Savart law, derive the expression for the magnetic field at the centre of a circular current-carrying coil.", marks: 5, probability: "High", type: "5mark" },
  { text: "State Ampere's circuital law. Using it, derive the expression for magnetic field inside a solenoid.", marks: 5, probability: "High", type: "5mark" },
  { text: "Derive an expression for the torque on a rectangular current loop placed in a uniform magnetic field.", marks: 5, probability: "Important", type: "5mark" },
  { text: "Explain the principle, construction and working of a moving coil galvanometer. What is its current sensitivity?", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: A charged particle moving parallel to a magnetic field experiences no force.\nReason: The magnetic force is given by F = qv × B.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
  { text: "HOTS: An electron and a proton enter a uniform magnetic field with the same momentum. Compare their radii of circular paths.", marks: 3, probability: "Medium", type: "hots" },
];

questionsRegistry["physics-5"] = [
  { text: "Define magnetic susceptibility and magnetic permeability of a material.", marks: 2, probability: "High", type: "2mark" },
  { text: "Distinguish between diamagnetic, paramagnetic, and ferromagnetic substances. Give one example of each.", marks: 3, probability: "High", type: "3mark" },
  { text: "What is a hysteresis loop? Explain the terms retentivity and coercivity.", marks: 3, probability: "Important", type: "3mark" },
  { text: "Why is soft iron used as the core of a transformer while steel is used for permanent magnets?", marks: 2, probability: "High", type: "2mark" },
  { text: "State Gauss's law in magnetism. What does it signify?", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Derive the expression for the magnetic field on the axial line of a bar magnet.", marks: 5, probability: "Medium", type: "5mark" },
  { text: "Assertion: The net magnetic flux through any closed surface is always zero.\nReason: Magnetic monopoles do not exist.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["physics-6"] = [
  { text: "State Faraday's laws of electromagnetic induction.", marks: 2, probability: "High", type: "2mark" },
  { text: "State Lenz's law. Show that it is consistent with the law of conservation of energy.", marks: 2, probability: "High", type: "2mark" },
  { text: "Define self-inductance of a coil. Write its SI unit.", marks: 2, probability: "Important", type: "2mark" },
  { text: "A rectangular coil of area A with N turns is rotated in a uniform magnetic field B at angular speed ω. Derive the expression for the induced emf.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive an expression for the self-inductance of a long solenoid of length l, cross-sectional area A, and N turns.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive an expression for the mutual inductance of two co-axial solenoids.", marks: 3, probability: "Medium", type: "3mark" },
  { text: "State Faraday's laws of electromagnetic induction. Derive the expression for emf induced in a straight conductor moving in a uniform magnetic field.", marks: 5, probability: "High", type: "5mark" },
  { text: "Explain the working of an AC generator. Derive an expression for the instantaneous emf induced.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: An emf is induced in a coil when a bar magnet is pushed into it.\nReason: The change in magnetic flux through the coil induces an emf as per Faraday's law.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
  { text: "HOTS: A metallic ring is held horizontally and a bar magnet is dropped through it with its north pole facing down. Describe the nature of the induced current as the magnet approaches and leaves the ring.", marks: 3, probability: "Medium", type: "hots" },
];

questionsRegistry["physics-7"] = [
  { text: "Define (i) peak value (ii) rms value of alternating current.", marks: 2, probability: "High", type: "2mark" },
  { text: "What is the power factor of a purely resistive AC circuit?", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Define impedance and reactance in an AC circuit.", marks: 2, probability: "High", type: "2mark" },
  { text: "What is resonance in a series LCR circuit? Derive the condition for resonance.", marks: 3, probability: "High", type: "3mark" },
  { text: "An AC source is connected to a series LCR circuit. Derive expressions for impedance and phase angle.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive an expression for the average power dissipated in a series LCR circuit. Define power factor.", marks: 5, probability: "High", type: "5mark" },
  { text: "Explain the principle and working of a transformer. Why is the core laminated?", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: At resonance, the impedance of a series LCR circuit is minimum and equal to R.\nReason: At resonance, X_L = X_C.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
  { text: "HOTS: In a series LCR circuit, the voltage across the capacitor can be greater than the source voltage. Explain how this is possible.", marks: 3, probability: "Medium", type: "hots" },
];

questionsRegistry["physics-8"] = [
  { text: "Name the electromagnetic waves used in (i) radar (ii) TV remote control (iii) killing germs in water.", marks: 2, probability: "High", type: "2mark" },
  { text: "Write the expression for energy density of an electromagnetic wave.", marks: 2, probability: "Medium", type: "2mark" },
  { text: "What is displacement current? Why did Maxwell introduce it?", marks: 3, probability: "High", type: "3mark" },
  { text: "Arrange the following in order of increasing frequency: microwaves, infrared, ultraviolet, gamma rays, radio waves, X-rays, visible light.", marks: 2, probability: "High", type: "2mark" },
  { text: "State two properties of electromagnetic waves. Write the expression for the speed of electromagnetic waves in vacuum.", marks: 3, probability: "Important", type: "3mark" },
  { text: "Describe the electromagnetic spectrum. Give one use of each type of electromagnetic radiation.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: Electromagnetic waves are transverse in nature.\nReason: The electric and magnetic fields oscillate perpendicular to each other and to the direction of propagation.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["physics-9"] = [
  { text: "State Snell's law of refraction. Define refractive index.", marks: 2, probability: "High", type: "2mark" },
  { text: "What is total internal reflection? State the conditions for it.", marks: 2, probability: "High", type: "2mark" },
  { text: "Define power of a lens. What is its SI unit?", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Draw a ray diagram for image formation by a convex lens when the object is placed between F and 2F.", marks: 2, probability: "Important", type: "2mark" },
  { text: "Derive the mirror formula (1/v + 1/u = 1/f) for a concave mirror.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive the lens maker's formula: 1/f = (n-1)(1/R₁ - 1/R₂).", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive the relation between refractive index and critical angle for total internal reflection.", marks: 3, probability: "Important", type: "3mark" },
  { text: "Derive an expression for refraction at a single spherical surface. Hence derive the thin lens formula.", marks: 5, probability: "High", type: "5mark" },
  { text: "Draw a ray diagram and explain the construction and working of a compound microscope. Derive the expression for its magnifying power.", marks: 5, probability: "High", type: "5mark" },
  { text: "Draw a ray diagram and explain the construction and working of an astronomical telescope. Derive the expression for its magnifying power in (i) normal adjustment (ii) when image is at least distance of distinct vision.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: A diamond sparkles brilliantly due to total internal reflection.\nReason: The critical angle for diamond is very small (about 24°).\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
  { text: "HOTS: A ray of white light passes through a glass prism. Why does it split into different colours? Which colour deviates the most and which the least?", marks: 3, probability: "Medium", type: "hots" },
];

questionsRegistry["physics-10"] = [
  { text: "State Huygens' principle. Using it, verify the laws of refraction.", marks: 3, probability: "High", type: "3mark" },
  { text: "What is the condition for constructive and destructive interference in Young's double slit experiment?", marks: 2, probability: "High", type: "2mark" },
  { text: "Define fringe width. How does fringe width change when (i) wavelength increases (ii) slit separation increases?", marks: 2, probability: "High", type: "2mark" },
  { text: "What is diffraction of light? How does diffraction differ from interference?", marks: 2, probability: "Important", type: "2mark" },
  { text: "Derive an expression for fringe width in Young's double slit experiment.", marks: 3, probability: "High", type: "3mark" },
  { text: "Using Huygens' principle, derive Snell's law of refraction.", marks: 5, probability: "High", type: "5mark" },
  { text: "Describe Young's double slit experiment. Derive the expression for fringe width and conditions for bright and dark fringes.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: In Young's double slit experiment, the central fringe is always bright.\nReason: At the central position, the path difference is zero.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
  { text: "HOTS: In YDSE, if one slit is covered with a red filter and the other with a blue filter, what will happen to the interference pattern?", marks: 3, probability: "Medium", type: "hots" },
];

questionsRegistry["physics-11"] = [
  { text: "State the laws of photoelectric emission.", marks: 2, probability: "High", type: "2mark" },
  { text: "Define threshold frequency and work function.", marks: 2, probability: "High", type: "2mark" },
  { text: "Write Einstein's photoelectric equation. Explain each term.", marks: 2, probability: "Important", type: "2mark" },
  { text: "What is de Broglie wavelength? Write its expression.", marks: 2, probability: "High", type: "2mark" },
  { text: "Draw the graph showing the variation of stopping potential with frequency of incident radiation. What does its slope represent?", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive Einstein's photoelectric equation. Explain how it accounts for the laws of photoelectric emission.", marks: 5, probability: "High", type: "5mark" },
  { text: "Describe Davisson and Germer's experiment. How did it verify de Broglie's hypothesis?", marks: 5, probability: "Medium", type: "5mark" },
  { text: "Explain the experimental study of photoelectric effect. Draw a labelled diagram of the apparatus used.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: Photoelectric emission is instantaneous.\nReason: It supports the particle nature of light.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
  { text: "HOTS: An electron and a photon have the same energy. Which has a larger wavelength? Justify.", marks: 3, probability: "Medium", type: "hots" },
];

questionsRegistry["physics-12"] = [
  { text: "State Bohr's postulates for the hydrogen atom.", marks: 2, probability: "High", type: "2mark" },
  { text: "Write the expression for the radius of the nth Bohr orbit. How does it depend on n?", marks: 2, probability: "High", type: "2mark" },
  { text: "Define ionisation energy and excitation energy.", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Derive the expression for energy of an electron in the nth orbit of hydrogen atom using Bohr's model.", marks: 3, probability: "High", type: "3mark" },
  { text: "Draw the energy level diagram of hydrogen atom. Show the Lyman, Balmer and Paschen series.", marks: 3, probability: "High", type: "3mark" },
  { text: "State Bohr's postulates. Derive the expression for the radius and energy of the nth orbit of hydrogen atom.", marks: 5, probability: "High", type: "5mark" },
  { text: "Derive the expression for the wavelengths of spectral lines of hydrogen atom using Bohr's theory.", marks: 5, probability: "Important", type: "5mark" },
  { text: "Assertion: Bohr's model could not explain the spectra of multi-electron atoms.\nReason: Bohr's model considers only electrostatic attraction between nucleus and electron.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["physics-13"] = [
  { text: "Define mass defect and binding energy of a nucleus.", marks: 2, probability: "High", type: "2mark" },
  { text: "What are nuclear fission and nuclear fusion? Give one example of each.", marks: 2, probability: "High", type: "2mark" },
  { text: "Define half-life of a radioactive substance. Write the relation between half-life and decay constant.", marks: 2, probability: "Important", type: "2mark" },
  { text: "Write Einstein's mass-energy relation. Calculate the energy equivalent of 1 atomic mass unit.", marks: 3, probability: "High", type: "3mark" },
  { text: "Draw the binding energy per nucleon vs mass number graph. Explain why fission of heavy nuclei and fusion of light nuclei release energy.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive the law of radioactive decay N = N₀e^(-λt). Define decay constant and half-life.", marks: 5, probability: "High", type: "5mark" },
  { text: "Explain nuclear fission and nuclear fusion with examples. Draw the binding energy curve and explain the energy release in both processes.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: Fusion reactions are more difficult to achieve than fission reactions.\nReason: Fusion requires extremely high temperatures to overcome the Coulomb barrier.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["physics-14"] = [
  { text: "What is the difference between intrinsic and extrinsic semiconductors?", marks: 2, probability: "High", type: "2mark" },
  { text: "What are n-type and p-type semiconductors? Give examples of dopants used.", marks: 2, probability: "High", type: "2mark" },
  { text: "Draw the V-I characteristics of a p-n junction diode in forward and reverse bias.", marks: 2, probability: "Important", type: "2mark" },
  { text: "What is a Zener diode? Draw its circuit as a voltage regulator.", marks: 3, probability: "High", type: "3mark" },
  { text: "Explain the working of an n-p-n transistor in common emitter configuration. Draw the circuit diagram.", marks: 3, probability: "High", type: "3mark" },
  { text: "Explain the formation of depletion region in a p-n junction. Draw the barrier potential diagram.", marks: 3, probability: "Important", type: "3mark" },
  { text: "Draw the circuit diagram of a full-wave rectifier using two diodes. Explain its working with input and output waveforms.", marks: 5, probability: "High", type: "5mark" },
  { text: "Explain the working of an n-p-n transistor as a common emitter amplifier. Draw the circuit diagram and explain the input/output characteristics.", marks: 5, probability: "High", type: "5mark" },
  { text: "Explain the working of (a) AND gate (b) OR gate (c) NOT gate. Draw their logic symbols and truth tables.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: A p-n junction diode does not obey Ohm's law.\nReason: The V-I characteristic of a diode is non-linear.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
  { text: "HOTS: Why is a transistor called a 'transfer resistor'? Explain the concept of current amplification factor.", marks: 3, probability: "Medium", type: "hots" },
];

// ===================== CHEMISTRY =====================

questionsRegistry["chemistry-1"] = [
  { text: "Define molality. How is it different from molarity?", marks: 2, probability: "High", type: "2mark" },
  { text: "State Raoult's law for volatile solutes.", marks: 2, probability: "High", type: "2mark" },
  { text: "What are ideal solutions? Give one example.", marks: 2, probability: "Important", type: "2mark" },
  { text: "Define colligative properties. Name any two.", marks: 2, probability: "High", type: "2mark" },
  { text: "What is van't Hoff factor? How is it related to the degree of dissociation?", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Derive the relationship between relative lowering of vapour pressure and mole fraction of solute.", marks: 3, probability: "High", type: "3mark" },
  { text: "Explain the term 'osmotic pressure'. Derive the expression π = CRT.", marks: 3, probability: "High", type: "3mark" },
  { text: "Define boiling point elevation. Derive ΔTb = Kb × m.", marks: 3, probability: "Important", type: "3mark" },
  { text: "State and explain Raoult's law. Explain positive and negative deviations with examples.", marks: 5, probability: "High", type: "5mark" },
  { text: "What are colligative properties? Derive the relation for depression in freezing point (ΔTf = Kf × m) and explain its application in determining molecular mass.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: The boiling point of a solution is always higher than that of the pure solvent.\nReason: Addition of a non-volatile solute lowers the vapour pressure of the solvent.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
  { text: "HOTS: Two solutions of sucrose and NaCl have the same molality. Which will have a higher boiling point? Explain using van't Hoff factor.", marks: 3, probability: "Medium", type: "hots" },
];

questionsRegistry["chemistry-2"] = [
  { text: "Define molar conductivity. How does it vary with concentration for strong and weak electrolytes?", marks: 2, probability: "High", type: "2mark" },
  { text: "What is an electrochemical cell? How does it differ from an electrolytic cell?", marks: 2, probability: "High", type: "2mark" },
  { text: "Write the Nernst equation for a general electrochemical cell.", marks: 2, probability: "Important", type: "2mark" },
  { text: "State Kohlrausch's law of independent migration of ions.", marks: 2, probability: "High", type: "2mark" },
  { text: "State Faraday's first and second laws of electrolysis.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive the Nernst equation for the electrode potential. Calculate the EMF of a Daniel cell at 25°C when [Zn²⁺] = 0.1 M and [Cu²⁺] = 0.01 M.", marks: 5, probability: "High", type: "5mark" },
  { text: "Explain the construction and working of a standard hydrogen electrode. How is it used to determine the electrode potential of other electrodes?", marks: 5, probability: "High", type: "5mark" },
  { text: "What are fuel cells? Describe the construction and working of hydrogen-oxygen fuel cell.", marks: 3, probability: "Medium", type: "3mark" },
  { text: "Assertion: Molar conductivity of a strong electrolyte increases with dilution.\nReason: On dilution, the degree of dissociation increases.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["chemistry-3"] = [
  { text: "Define rate of reaction. What are the factors affecting it?", marks: 2, probability: "High", type: "2mark" },
  { text: "Define order and molecularity of a reaction. How do they differ?", marks: 2, probability: "High", type: "2mark" },
  { text: "Write the Arrhenius equation. Define each term.", marks: 2, probability: "Important", type: "2mark" },
  { text: "What is the half-life of a first-order reaction? Show that it is independent of initial concentration.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive the integrated rate equation for a first-order reaction.", marks: 3, probability: "High", type: "3mark" },
  { text: "Derive the integrated rate law for first-order reactions. Show how it can be used to determine the rate constant graphically.", marks: 5, probability: "High", type: "5mark" },
  { text: "Explain the Arrhenius equation. What is the effect of (i) temperature (ii) catalyst on the rate of reaction?", marks: 5, probability: "Important", type: "5mark" },
  { text: "Assertion: For a zero-order reaction, the rate is independent of the concentration of reactants.\nReason: The rate constant of a zero-order reaction has units of mol L⁻¹ s⁻¹.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["chemistry-4"] = [
  { text: "Distinguish between physisorption and chemisorption.", marks: 2, probability: "High", type: "2mark" },
  { text: "What are colloids? How do they differ from true solutions and suspensions?", marks: 2, probability: "High", type: "2mark" },
  { text: "What is Tyndall effect? What does it confirm?", marks: 2, probability: "Medium", type: "2mark" },
  { text: "What are micelles? Under what conditions are they formed?", marks: 3, probability: "Important", type: "3mark" },
  { text: "Explain coagulation of colloids. State Hardy-Schulze rule.", marks: 3, probability: "High", type: "3mark" },
  { text: "What are emulsions? How are they classified? What is the role of emulsifying agents?", marks: 3, probability: "Medium", type: "3mark" },
  { text: "What is adsorption? Distinguish between physical and chemical adsorption. Write the Freundlich adsorption isotherm.", marks: 5, probability: "High", type: "5mark" },
  { text: "Define colloids. Describe any three methods of preparation and three methods of purification of colloidal solutions.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: Lyophilic colloids are more stable than lyophobic colloids.\nReason: Lyophilic colloids are extensively solvated.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["chemistry-5"] = [
  { text: "Why does nitrogen show catenation properties less than phosphorus?", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Why is BiH₃ the strongest reducing agent among Group 15 hydrides?", marks: 2, probability: "High", type: "2mark" },
  { text: "Draw the structure of (i) PCl₅ (ii) H₂SO₄ (iii) BrF₃.", marks: 2, probability: "High", type: "2mark" },
  { text: "What are interhalogen compounds? Give two examples.", marks: 2, probability: "Important", type: "2mark" },
  { text: "Explain the allotropy of sulphur.", marks: 3, probability: "Medium", type: "3mark" },
  { text: "How is ozone prepared in the laboratory? What is its structure?", marks: 3, probability: "High", type: "3mark" },
  { text: "Give reasons: (i) Sulphur shows +6 oxidation state but oxygen does not (ii) Nitrogen is a gas but phosphorus is a solid (iii) Noble gases have very low boiling points.", marks: 3, probability: "High", type: "3mark" },
  { text: "Describe the manufacturing of sulphuric acid by the Contact process. Write the reactions involved.", marks: 5, probability: "High", type: "5mark" },
  { text: "Discuss the general trends in properties of Group 16 elements: oxidation states, electron gain enthalpy, and hydride stability.", marks: 5, probability: "Important", type: "5mark" },
  { text: "Assertion: Noble gases have very low boiling points.\nReason: They have weak van der Waals forces.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["chemistry-6"] = [
  { text: "What are transition elements? Why are they called so?", marks: 2, probability: "High", type: "2mark" },
  { text: "Why do transition metals show variable oxidation states?", marks: 2, probability: "High", type: "2mark" },
  { text: "Why are transition metal compounds generally coloured?", marks: 2, probability: "Important", type: "2mark" },
  { text: "What are lanthanoids? What is lanthanoid contraction? What are its consequences?", marks: 3, probability: "High", type: "3mark" },
  { text: "Explain why Cr²⁺ is a strong reducing agent while Mn³⁺ is a strong oxidising agent.", marks: 3, probability: "Medium", type: "3mark" },
  { text: "Describe the preparation and properties of KMnO₄. Write two reactions showing its oxidising nature.", marks: 5, probability: "High", type: "5mark" },
  { text: "Describe the preparation, properties and uses of K₂Cr₂O₇. Explain its action in acidic medium.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: Zn²⁺ salts are white and diamagnetic.\nReason: Zn²⁺ has completely filled d-orbitals.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["chemistry-7"] = [
  { text: "What is a coordinate bond? How is it different from a covalent bond?", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Write the IUPAC name of [Co(NH₃)₄Cl₂]Cl. What is its coordination number?", marks: 2, probability: "High", type: "2mark" },
  { text: "What are ligands? Distinguish between unidentate, bidentate, and polydentate ligands with examples.", marks: 2, probability: "High", type: "2mark" },
  { text: "Explain Crystal Field Theory for octahedral complexes. What is crystal field splitting energy (Δ₀)?", marks: 3, probability: "High", type: "3mark" },
  { text: "What is spectrochemical series? How does it help predict magnetic properties of complexes?", marks: 3, probability: "Important", type: "3mark" },
  { text: "Explain the bonding in [Fe(CN)₆]⁴⁻ and [FeF₆]³⁻ using Crystal Field Theory. Why is one paramagnetic and the other diamagnetic?", marks: 5, probability: "High", type: "5mark" },
  { text: "Discuss the Valence Bond Theory of coordination compounds. Explain the geometry and magnetic behaviour of [Ni(CN)₄]²⁻ and [NiCl₄]²⁻.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: [Fe(CN)₆]⁴⁻ is diamagnetic while [Fe(H₂O)₆]²⁺ is paramagnetic.\nReason: CN⁻ is a strong field ligand.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["chemistry-8"] = [
  { text: "What is Wurtz reaction? Write the chemical equation.", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Give the IUPAC name: (i) CH₃CHClCH₃ (ii) ClCH₂CH₂CH₂Cl.", marks: 2, probability: "High", type: "2mark" },
  { text: "What is the difference between SN1 and SN2 mechanisms?", marks: 2, probability: "High", type: "2mark" },
  { text: "Explain why the C–X bond in haloalkanes is polar. How does the bond polarity affect the reactivity?", marks: 3, probability: "High", type: "3mark" },
  { text: "Explain the mechanism of SN1 reaction with the example of hydrolysis of tert-butyl bromide.", marks: 3, probability: "High", type: "3mark" },
  { text: "Explain the mechanism of SN2 reaction using CH₃Br + OH⁻. Why does it show inversion of configuration?", marks: 3, probability: "Important", type: "3mark" },
  { text: "Compare SN1 and SN2 reactions with respect to mechanism, stereochemistry, rate law, substrate preference, and examples.", marks: 5, probability: "High", type: "5mark" },
  { text: "Explain the preparation, properties and reactions of chloroform (CHCl₃). Why is it stored in dark bottles?", marks: 5, probability: "Medium", type: "5mark" },
  { text: "Assertion: Chlorobenzene is less reactive than chloroethane towards nucleophilic substitution.\nReason: In chlorobenzene, the C–Cl bond has partial double bond character due to resonance.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["chemistry-9"] = [
  { text: "How do you distinguish between primary, secondary and tertiary alcohols using Lucas test?", marks: 2, probability: "High", type: "2mark" },
  { text: "What is Williamson synthesis? Write the reaction.", marks: 2, probability: "High", type: "2mark" },
  { text: "Why are phenols more acidic than alcohols?", marks: 2, probability: "Important", type: "2mark" },
  { text: "Explain the mechanism of dehydration of ethanol to ethene.", marks: 3, probability: "High", type: "3mark" },
  { text: "Give reasons: (i) Phenol is acidic (ii) o-nitrophenol has lower boiling point than p-nitrophenol (iii) Ethanol has higher boiling point than diethyl ether.", marks: 3, probability: "High", type: "3mark" },
  { text: "Describe the industrial preparation of phenol from cumene. Write all reactions involved.", marks: 5, probability: "High", type: "5mark" },
  { text: "Discuss the reactions of phenol: (i) with bromine water (ii) Kolbe's reaction (iii) Reimer-Tiemann reaction (iv) nitration.", marks: 5, probability: "Important", type: "5mark" },
  { text: "Assertion: Alcohols have higher boiling points than ethers of similar molecular mass.\nReason: Alcohols form intermolecular hydrogen bonds.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["chemistry-10"] = [
  { text: "Name the reagents used for (i) Clemmensen reduction (ii) Wolff-Kishner reduction.", marks: 2, probability: "High", type: "2mark" },
  { text: "What is aldol condensation? Write the reaction for ethanal.", marks: 2, probability: "High", type: "2mark" },
  { text: "How will you distinguish between aldehydes and ketones using (i) Tollens' test (ii) Fehling's test?", marks: 2, probability: "Important", type: "2mark" },
  { text: "Explain the mechanism of nucleophilic addition to a carbonyl group.", marks: 3, probability: "High", type: "3mark" },
  { text: "Write the reactions: (i) Cannizzaro reaction (ii) Cross aldol condensation (iii) HVZ reaction.", marks: 3, probability: "High", type: "3mark" },
  { text: "Describe the preparation and chemical properties of (i) formaldehyde (ii) acetaldehyde. Give chemical equations.", marks: 5, probability: "High", type: "5mark" },
  { text: "Explain the following name reactions: (i) Rosenmund reduction (ii) Stephen reaction (iii) Etard reaction (iv) Gattermann-Koch reaction.", marks: 5, probability: "Important", type: "5mark" },
  { text: "Assertion: Carboxylic acids are more acidic than phenols.\nReason: The carboxylate ion is stabilised by resonance more effectively than the phenoxide ion.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["chemistry-11"] = [
  { text: "Why are amines basic in nature? Compare the basicity of primary, secondary, and tertiary amines in gaseous phase.", marks: 2, probability: "High", type: "2mark" },
  { text: "What is Hofmann's bromamide reaction? Write the equation.", marks: 2, probability: "High", type: "2mark" },
  { text: "What is a diazonium salt? How is it prepared?", marks: 2, probability: "Important", type: "2mark" },
  { text: "Explain the Hinsberg test for distinguishing primary, secondary, and tertiary amines.", marks: 3, probability: "High", type: "3mark" },
  { text: "Describe the coupling reaction of diazonium salts with phenol and aniline.", marks: 3, probability: "Medium", type: "3mark" },
  { text: "Discuss the methods of preparation of amines: (i) reduction of nitro compounds (ii) Gabriel phthalimide synthesis (iii) Hofmann bromamide reaction.", marks: 5, probability: "High", type: "5mark" },
  { text: "Describe the chemistry of diazonium salts: preparation, chemical reactions (Sandmeyer, Gattermann, replacement reactions), and importance in synthesis.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: Aniline does not undergo Friedel-Crafts reaction directly.\nReason: The –NH₂ group of aniline reacts with the Lewis acid catalyst (AlCl₃).\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["chemistry-12"] = [
  { text: "What are reducing and non-reducing sugars? Give one example of each.", marks: 2, probability: "High", type: "2mark" },
  { text: "What are essential and non-essential amino acids? Give two examples of each.", marks: 2, probability: "High", type: "2mark" },
  { text: "What is denaturation of proteins? Give an example.", marks: 2, probability: "Important", type: "2mark" },
  { text: "Distinguish between DNA and RNA.", marks: 3, probability: "High", type: "3mark" },
  { text: "Explain the primary, secondary, tertiary, and quaternary structures of proteins.", marks: 3, probability: "High", type: "3mark" },
  { text: "What are vitamins? Classify them as fat-soluble and water-soluble. Give deficiency diseases for any four vitamins.", marks: 5, probability: "High", type: "5mark" },
  { text: "What are carbohydrates? How are they classified? Explain the cyclic structures of glucose.", marks: 5, probability: "Important", type: "5mark" },
  { text: "Assertion: Sucrose is a non-reducing sugar.\nReason: In sucrose, the reducing groups of both glucose and fructose are involved in glycosidic bond formation.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

// ===================== MATHEMATICS =====================

questionsRegistry["mathematics-1"] = [
  { text: "Check if the relation R = {(a, b) : a ≤ b} on the set of real numbers is reflexive, symmetric, or transitive.", marks: 2, probability: "High", type: "2mark" },
  { text: "Let f : R → R be defined by f(x) = 3x + 2. Check whether f is one-one and onto.", marks: 2, probability: "High", type: "2mark" },
  { text: "Show that the relation R on Z defined by R = {(a, b) : |a – b| is divisible by 2} is an equivalence relation.", marks: 3, probability: "High", type: "3mark" },
  { text: "Let f : N → N be defined by f(x) = x² + x + 1. Show that f is one-one but not onto.", marks: 3, probability: "Important", type: "3mark" },
  { text: "If f : R → R is given by f(x) = (4x + 3)/(6x – 4), x ≠ 2/3, show that fof(x) = x for all x ≠ 2/3. What is the inverse of f?", marks: 5, probability: "High", type: "5mark" },
  { text: "Show that the relation R on A = {1, 2, 3, ..., 14} defined by R = {(x, y) : 3x – y = 0} is neither reflexive, nor symmetric, nor transitive.", marks: 5, probability: "Medium", type: "5mark" },
  { text: "Determine whether the binary operation * defined on Q by a * b = ab/2 is commutative, associative. Find the identity element, if it exists.", marks: 5, probability: "High", type: "5mark" },
  { text: "Assertion: Every function is a relation but every relation is not a function.\nReason: A function is a special type of relation where every element of the domain has exactly one image.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

questionsRegistry["mathematics-2"] = [
  { text: "Find the principal value of sin⁻¹(−1/2) + cos⁻¹(−1/2).", marks: 2, probability: "High", type: "2mark" },
  { text: "Prove that tan⁻¹(1/2) + tan⁻¹(1/3) = π/4.", marks: 2, probability: "High", type: "2mark" },
  { text: "Write the domain and range of cos⁻¹(x).", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Prove that 2tan⁻¹(1/3) + tan⁻¹(1/7) = π/4.", marks: 3, probability: "High", type: "3mark" },
  { text: "Simplify: tan⁻¹[(√(1+x²) – 1)/x].", marks: 3, probability: "Important", type: "3mark" },
  { text: "Prove that tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1-xy)], xy < 1. Use this to find tan⁻¹(1/2) + tan⁻¹(1/5) + tan⁻¹(1/8).", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["mathematics-3"] = [
  { text: "If A is a 3×3 matrix such that |A| = 5, find |adj A|.", marks: 2, probability: "High", type: "2mark" },
  { text: "If A = [[1, 2], [3, 4]], find A + A'.", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Express the matrix [[3, 5], [-1, 2]] as the sum of a symmetric and a skew-symmetric matrix.", marks: 3, probability: "High", type: "3mark" },
  { text: "Using elementary row operations, find the inverse of [[2, 1], [1, 1]].", marks: 3, probability: "High", type: "3mark" },
  { text: "If A = [[2, 0, 1], [2, 1, 3], [1, -1, 0]], find A⁻¹. Use it to solve: 2x + y = 4, 2x + y + 3z = 10, x – y = 1.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["mathematics-4"] = [
  { text: "Using properties of determinants, prove that |[a, a², bc], [b, b², ca], [c, c², ab]| = (a-b)(b-c)(c-a)(ab+bc+ca).", marks: 3, probability: "High", type: "3mark" },
  { text: "Find the area of the triangle whose vertices are (1, 0), (6, 0), (4, 3) using determinants.", marks: 2, probability: "High", type: "2mark" },
  { text: "If A is a square matrix of order 3 and |A| = 4, find |2A|.", marks: 2, probability: "Important", type: "2mark" },
  { text: "Solve the system of equations using Cramer's rule: x + 2y + z = 7, x + 3z = 11, 2x – 3y = 1.", marks: 5, probability: "High", type: "5mark" },
  { text: "Using properties, prove: |[1+a, 1, 1], [1, 1+b, 1], [1, 1, 1+c]| = abc(1 + 1/a + 1/b + 1/c).", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["mathematics-5"] = [
  { text: "Discuss the continuity of f(x) = |x| at x = 0.", marks: 2, probability: "High", type: "2mark" },
  { text: "Find dy/dx if y = sin⁻¹(2x√(1-x²)).", marks: 2, probability: "High", type: "2mark" },
  { text: "Find the derivative of xˣ with respect to x.", marks: 3, probability: "High", type: "3mark" },
  { text: "If y = (tan⁻¹x)², show that (1+x²)²y'' + 2x(1+x²)y' = 2.", marks: 3, probability: "Important", type: "3mark" },
  { text: "Verify Rolle's theorem for f(x) = x²(1-x)² in [0, 1]. Find the value of c.", marks: 3, probability: "Medium", type: "3mark" },
  { text: "If y = Aemx + Benx, prove that d²y/dx² – (m+n)dy/dx + mny = 0.", marks: 5, probability: "High", type: "5mark" },
  { text: "State and prove Rolle's theorem. Verify it for f(x) = x² – 5x + 6 in [2, 3].", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["mathematics-6"] = [
  { text: "Find the intervals in which f(x) = 2x³ – 3x² – 36x + 7 is strictly increasing or decreasing.", marks: 3, probability: "High", type: "3mark" },
  { text: "Find the equation of the tangent to the curve y = x³ – 3x + 5 at the point (2, 7).", marks: 2, probability: "High", type: "2mark" },
  { text: "Find the maximum and minimum values of f(x) = sin x + cos x.", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Show that the semi-vertical angle of a cone of maximum volume and given slant height is tan⁻¹(√2).", marks: 5, probability: "High", type: "5mark" },
  { text: "A rectangular sheet of tin 45 cm × 24 cm is to be made into a box without top by cutting squares from each corner. Find the side of the square to be cut for maximum volume.", marks: 5, probability: "High", type: "5mark" },
  { text: "Prove that the radius of the right circular cylinder of greatest curved surface area which can be inscribed in a given cone is half of that of the cone.", marks: 5, probability: "Important", type: "5mark" },
];

questionsRegistry["mathematics-7"] = [
  { text: "Evaluate: ∫ dx/(x² + 4x + 13).", marks: 2, probability: "High", type: "2mark" },
  { text: "Evaluate: ∫ sin³x cos²x dx.", marks: 2, probability: "Medium", type: "2mark" },
  { text: "Evaluate: ∫₀^π x sin x/(1 + cos²x) dx.", marks: 3, probability: "High", type: "3mark" },
  { text: "Evaluate: ∫ (2x+3)/√(x²+4x+1) dx.", marks: 3, probability: "Important", type: "3mark" },
  { text: "Evaluate: ∫ dx/(sin x + cos x) using the substitution t = tan(x/2).", marks: 3, probability: "High", type: "3mark" },
  { text: "Evaluate ∫₀^4 |x-1| dx.", marks: 2, probability: "High", type: "2mark" },
  { text: "Prove and apply: ∫₀^a f(x) dx = ∫₀^a f(a-x) dx. Use it to evaluate ∫₀^(π/2) log(sin x) dx.", marks: 5, probability: "High", type: "5mark" },
  { text: "Evaluate ∫ (x² + 1)/(x⁴ + 1) dx.", marks: 5, probability: "Important", type: "5mark" },
];

questionsRegistry["mathematics-8"] = [
  { text: "Find the area of the region bounded by y² = 4x and x = 3.", marks: 2, probability: "High", type: "2mark" },
  { text: "Find the area of the region enclosed between y = x² and y = x.", marks: 3, probability: "High", type: "3mark" },
  { text: "Find the area of the region bounded by the ellipse x²/a² + y²/b² = 1.", marks: 3, probability: "Important", type: "3mark" },
  { text: "Using integration, find the area of the region bounded by the triangle whose vertices are (1, 0), (2, 2), (3, 1).", marks: 5, probability: "High", type: "5mark" },
  { text: "Find the area of the region {(x, y) : x² + y² ≤ 1 ≤ x + y} using integration.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["mathematics-9"] = [
  { text: "Find the order and degree of the differential equation: d²y/dx² + (dy/dx)³ + y = 0.", marks: 2, probability: "High", type: "2mark" },
  { text: "Form the differential equation of the family of circles touching the x-axis at origin.", marks: 2, probability: "High", type: "2mark" },
  { text: "Solve: dy/dx + y/x = x².", marks: 3, probability: "High", type: "3mark" },
  { text: "Solve: (1 + x²) dy/dx + 2xy = 1/(1+x²), given y = 0 when x = 1.", marks: 3, probability: "Important", type: "3mark" },
  { text: "Solve the differential equation: (x + y)dy + (x – y)dx = 0.", marks: 5, probability: "High", type: "5mark" },
  { text: "Find the particular solution of the differential equation (1 + e^(2x))dy + (1 + y²)eˣdx = 0, given y = 1 when x = 0.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["mathematics-10"] = [
  { text: "Find the projection of vector →a = 2î – ĵ + k̂ on →b = î – 2ĵ + k̂.", marks: 2, probability: "High", type: "2mark" },
  { text: "Find |→a × →b| if |→a| = 3, |→b| = 4 and →a·→b = 6.", marks: 2, probability: "High", type: "2mark" },
  { text: "Find a unit vector perpendicular to both →a = î + ĵ + k̂ and →b = 2î + 3ĵ – k̂.", marks: 3, probability: "High", type: "3mark" },
  { text: "Prove that [→a + →b, →b + →c, →c + →a] = 2[→a, →b, →c].", marks: 3, probability: "Important", type: "3mark" },
  { text: "If →a = î + ĵ + k̂, →b = 2î – ĵ + 3k̂ and →c = î – 2ĵ + k̂, find a vector of magnitude 6 which is perpendicular to both →a and →b.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["mathematics-11"] = [
  { text: "Find the distance of the point (2, 3, –5) from the plane →r·(6î – 3ĵ + 2k̂) = 4.", marks: 2, probability: "High", type: "2mark" },
  { text: "Find the angle between the planes 2x – y + z = 6 and x + y + 2z = 7.", marks: 2, probability: "High", type: "2mark" },
  { text: "Find the shortest distance between the lines: →r = (1+t)î + (2–t)ĵ + (3+2t)k̂ and →r = (s)î + (2s–1)ĵ – (2s+1)k̂.", marks: 3, probability: "High", type: "3mark" },
  { text: "Find the equation of the plane passing through (1, –1, 2) and perpendicular to each of the planes 2x + 3y – 2z = 5 and x + 2y – 3z = 8.", marks: 3, probability: "Important", type: "3mark" },
  { text: "Derive the shortest distance formula between two skew lines in vector form. Find the shortest distance between →r = î + 2ĵ + 3k̂ + λ(2î + 3ĵ + 4k̂) and →r = 2î + 4ĵ + 5k̂ + μ(3î + 4ĵ + 5k̂).", marks: 5, probability: "High", type: "5mark" },
  { text: "Find the equation of the plane determined by the points (2, 5, –3), (–2, –3, 5), (5, 3, –3). Also find the distance of this plane from the origin.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["mathematics-12"] = [
  { text: "Solve graphically: Minimise Z = 3x + 5y subject to x + 3y ≥ 3, x + y ≥ 2, x ≥ 0, y ≥ 0.", marks: 3, probability: "High", type: "3mark" },
  { text: "A merchant plans to sell two types of personal computers. He has ₹25 lakh to invest and has storage space for 20 items. Type A costs ₹25000 and type B costs ₹40000. He expects a profit of ₹2000 on A and ₹3000 on B. Formulate as LPP and solve graphically.", marks: 5, probability: "High", type: "5mark" },
  { text: "A manufacturer produces two types of toys A and B. A toy of type A requires 5 minutes for cutting and 10 minutes for assembling. A toy of type B requires 8 minutes for cutting and 8 minutes for assembling. There are 3 hours 20 minutes for cutting and 4 hours for assembling per day. Profit on A is ₹50 and on B is ₹60. Find the number of each toy to maximise profit.", marks: 5, probability: "Important", type: "5mark" },
  { text: "Define feasible region and optimal solution in a linear programming problem.", marks: 2, probability: "High", type: "2mark" },
];

questionsRegistry["mathematics-13"] = [
  { text: "If P(A) = 0.6, P(B) = 0.3, P(A∩B) = 0.2, find P(A|B).", marks: 2, probability: "High", type: "2mark" },
  { text: "A die is thrown twice. Find the probability of getting a sum 7.", marks: 2, probability: "Medium", type: "2mark" },
  { text: "State Bayes' theorem. A factory has three machines. Machine I produces 50%, Machine II 30%, Machine III 20% of total output. Defective rates are 3%, 4%, 5% respectively. A randomly selected item is defective. Find the probability it was produced by Machine II.", marks: 5, probability: "High", type: "5mark" },
  { text: "A random variable X has the probability distribution:\nX: 0 1 2 3 4 5\nP(X): 0.1 k 0.2 2k 0.3 k\nFind (i) k (ii) P(X < 2) (iii) mean of X.", marks: 5, probability: "High", type: "5mark" },
  { text: "If a fair coin is tossed 10 times, find the probability of getting (i) exactly 6 heads (ii) at least 6 heads.", marks: 3, probability: "High", type: "3mark" },
  { text: "Two cards are drawn simultaneously from a well-shuffled pack of 52 cards. Find the mean and variance of the number of kings drawn.", marks: 5, probability: "Important", type: "5mark" },
  { text: "Assertion: P(A∪B) = P(A) + P(B) – P(A∩B).\nReason: This is the addition theorem of probability.\nSelect the correct option.", marks: 1, probability: "High", type: "assertion" },
];

// ===================== ENGLISH =====================

questionsRegistry["english-1"] = [
  { text: "What was Franz's initial reaction to the last lesson? How did his feelings change during the lesson?", marks: 2, probability: "High", type: "2mark" },
  { text: "What did M. Hamel say about the French language? Why did he consider it important?", marks: 2, probability: "High", type: "2mark" },
  { text: "Why were the village elders sitting at the back of the classroom?", marks: 2, probability: "Important", type: "2mark" },
  { text: "How did M. Hamel's appearance on the day of the last lesson differ from usual? Why?", marks: 3, probability: "High", type: "3mark" },
  { text: "What changes did Franz notice in the school that day? What were the reasons behind those changes?", marks: 3, probability: "High", type: "3mark" },
  { text: "The story 'The Last Lesson' emphasises the importance of one's mother tongue. Discuss how the loss of language is portrayed as the loss of identity.", marks: 5, probability: "High", type: "5mark" },
  { text: "Draw a character sketch of M. Hamel as portrayed in 'The Last Lesson'. How does he embody patriotism and dignity?", marks: 5, probability: "High", type: "5mark" },
  { text: "HOTS: 'When a people are enslaved, as long as they hold fast to their language, it is as if they had the key to their prison.' Explain this statement in the context of the story.", marks: 5, probability: "Important", type: "hots" },
];

questionsRegistry["english-2"] = [
  { text: "What is the irony in Saheb's name 'Saheb-e-Alam'?", marks: 2, probability: "High", type: "2mark" },
  { text: "What does the author mean by 'For them, garbage is gold'?", marks: 2, probability: "High", type: "2mark" },
  { text: "How is Mukesh's dream different from that of his family?", marks: 2, probability: "Important", type: "2mark" },
  { text: "Describe the vicious cycle that the bangle makers of Firozabad are trapped in.", marks: 3, probability: "High", type: "3mark" },
  { text: "What is the significance of the title 'Lost Spring'? Explain with reference to both Saheb's and Mukesh's stories.", marks: 5, probability: "High", type: "5mark" },
  { text: "Compare and contrast the lives of Saheb and Mukesh. How do they represent the 'lost spring' of millions of Indian children?", marks: 5, probability: "High", type: "5mark" },
  { text: "HOTS: 'Mukesh's dream of becoming a motor mechanic is a challenge to the system of forced child labour.' Do you agree? Discuss.", marks: 5, probability: "Medium", type: "hots" },
];

questionsRegistry["english-3"] = [
  { text: "How did Douglas develop a fear of water?", marks: 2, probability: "High", type: "2mark" },
  { text: "What happened at the YMCA pool?", marks: 2, probability: "High", type: "2mark" },
  { text: "How did the instructor help Douglas overcome his fear?", marks: 3, probability: "High", type: "3mark" },
  { text: "What is the significance of the title 'Deep Water'?", marks: 3, probability: "Important", type: "3mark" },
  { text: "How did Douglas finally conquer his fear of water? What does his experience teach us about the nature of fear?", marks: 5, probability: "High", type: "5mark" },
  { text: "Explain the relevance of Roosevelt's quote: 'All we have to fear is fear itself' in the context of this chapter.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-4"] = [
  { text: "What is the central metaphor of the story? How does it apply to the peddler?", marks: 2, probability: "High", type: "2mark" },
  { text: "How did the peddler feel after stealing the crofter's money?", marks: 2, probability: "Important", type: "2mark" },
  { text: "Why did Edla insist that the peddler stay for Christmas even after knowing his true identity?", marks: 3, probability: "High", type: "3mark" },
  { text: "How did the ironmaster's attitude differ from his daughter Edla's?", marks: 3, probability: "High", type: "3mark" },
  { text: "'The Rattrap' shows that essential goodness in a human being can be awakened through love and trust. Discuss with reference to the story.", marks: 5, probability: "High", type: "5mark" },
  { text: "Draw a character sketch of Edla Willmansson and explain her role in the peddler's transformation.", marks: 5, probability: "Important", type: "5mark" },
];

questionsRegistry["english-5"] = [
  { text: "Who was Rajkumar Shukla? Why was he important in the Champaran movement?", marks: 2, probability: "High", type: "2mark" },
  { text: "Why did Gandhi refuse the help of Charles Freer Andrews?", marks: 2, probability: "High", type: "2mark" },
  { text: "What was the outcome of the Champaran movement?", marks: 3, probability: "Important", type: "3mark" },
  { text: "How did Gandhi's Champaran campaign show his methods of civil disobedience?", marks: 3, probability: "High", type: "3mark" },
  { text: "Why is the Champaran episode considered a turning point in the Indian freedom struggle?", marks: 5, probability: "High", type: "5mark" },
  { text: "'Indigo' demonstrates Gandhi's dual approach — political justice and social upliftment. Discuss.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-6"] = [
  { text: "What does the title 'Poets and Pancakes' signify?", marks: 2, probability: "High", type: "2mark" },
  { text: "Why was the office boy resentful of Subbu?", marks: 2, probability: "Important", type: "2mark" },
  { text: "Give a character sketch of Subbu.", marks: 3, probability: "High", type: "3mark" },
  { text: "Why was the English poet's visit to Gemini Studios a cultural disconnect?", marks: 3, probability: "High", type: "3mark" },
  { text: "Describe the humour and irony in 'Poets and Pancakes'. How does Asokamitran contrast the glamour of cinema with its behind-the-scenes reality?", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-7"] = [
  { text: "What are the two contrasting views on interviews mentioned in the chapter?", marks: 2, probability: "High", type: "2mark" },
  { text: "What does Umberto Eco mean by 'interstices'?", marks: 2, probability: "High", type: "2mark" },
  { text: "How are Eco's academic and fictional writings related?", marks: 3, probability: "Important", type: "3mark" },
  { text: "Why was 'The Name of the Rose' so successful?", marks: 3, probability: "Medium", type: "3mark" },
  { text: "'The Interview' offers both a theoretical debate and a practical demonstration of interviewing. Discuss both parts and how they complement each other.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-8"] = [
  { text: "What is the significance of the title 'Going Places'?", marks: 2, probability: "High", type: "2mark" },
  { text: "How is Sophie different from Jansie?", marks: 2, probability: "High", type: "2mark" },
  { text: "What role does Geoff play in Sophie's fantasy world?", marks: 3, probability: "Important", type: "3mark" },
  { text: "What does Sophie's visit to the canal reveal about the clash between fantasy and reality?", marks: 3, probability: "High", type: "3mark" },
  { text: "'Going Places' explores the theme of adolescent hero worship and escapism against the backdrop of working-class constraints. Discuss.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-9"] = [
  { text: "Why does the poet compare her mother to a 'corpse' and a 'late winter's moon'?", marks: 2, probability: "High", type: "2mark" },
  { text: "What do the 'young trees' and 'merry children' symbolise in the poem?", marks: 2, probability: "High", type: "2mark" },
  { text: "Why does the poet 'smile and smile and smile'?", marks: 2, probability: "Important", type: "2mark" },
  { text: "What is the significance of the poem being written as one long sentence?", marks: 3, probability: "High", type: "3mark" },
  { text: "Analyse the poem 'My Mother at Sixty-Six' as a moving expression of a daughter's fear of losing her mother. Discuss the literary devices used.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-10"] = [
  { text: "Why does the poet say 'Shakespeare is wicked' and the map 'a bad example'?", marks: 2, probability: "High", type: "2mark" },
  { text: "How does the poet describe the slum children?", marks: 2, probability: "High", type: "2mark" },
  { text: "What does 'Break O break open' signify?", marks: 3, probability: "High", type: "3mark" },
  { text: "What is the central contrast in the poem?", marks: 3, probability: "Important", type: "3mark" },
  { text: "Stephen Spender presents education as meaningless unless it comes with real access and opportunity. Discuss with reference to the poem.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-11"] = [
  { text: "What does the poet mean by 'keeping quiet'? Is it total inactivity?", marks: 2, probability: "High", type: "2mark" },
  { text: "Why does Neruda say 'count to twelve'?", marks: 2, probability: "Medium", type: "2mark" },
  { text: "What are 'green wars'? How does the poet want humans to change?", marks: 3, probability: "High", type: "3mark" },
  { text: "How does the poet use the Earth analogy to distinguish between silence and death?", marks: 3, probability: "Important", type: "3mark" },
  { text: "Neruda's 'Keeping Quiet' is a plea for introspection and peace in a world obsessed with activity. Discuss the poet's vision and how he distinguishes his idea from death or inactivity.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-12"] = [
  { text: "What is the central idea of 'A Thing of Beauty'?", marks: 2, probability: "High", type: "2mark" },
  { text: "What are the things that cause suffering according to Keats?", marks: 2, probability: "High", type: "2mark" },
  { text: "What are the sources of beauty mentioned by Keats?", marks: 3, probability: "Important", type: "3mark" },
  { text: "Explain: 'An endless fountain of immortal drink, pouring unto us from the heaven's brink.'", marks: 3, probability: "High", type: "3mark" },
  { text: "How does Keats present beauty as an antidote to human suffering in 'A Thing of Beauty'? Discuss with reference to specific images from the poem.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-13"] = [
  { text: "What is the irony in 'greedy good-doers'?", marks: 2, probability: "High", type: "2mark" },
  { text: "What does the roadside stand symbolise?", marks: 2, probability: "High", type: "2mark" },
  { text: "How does Frost portray the urban-rural divide in the poem?", marks: 3, probability: "Important", type: "3mark" },
  { text: "What is the central message of 'A Roadside Stand'?", marks: 3, probability: "High", type: "3mark" },
  { text: "Robert Frost critiques both urban indifference and exploitative charity. Discuss with reference to 'A Roadside Stand'.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-14"] = [
  { text: "How are Aunt Jennifer's tigers different from Aunt Jennifer herself?", marks: 2, probability: "High", type: "2mark" },
  { text: "What does the 'massive weight of Uncle's wedding band' symbolise?", marks: 2, probability: "High", type: "2mark" },
  { text: "What is the significance of the tigers surviving after Jennifer's death?", marks: 3, probability: "High", type: "3mark" },
  { text: "What is the irony in the poem?", marks: 3, probability: "Important", type: "3mark" },
  { text: "'Aunt Jennifer's Tigers' is a powerful feminist statement about patriarchal oppression and the liberating power of art. Discuss.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-15"] = [
  { text: "What does the third level symbolise?", marks: 2, probability: "High", type: "2mark" },
  { text: "What is the twist in the story?", marks: 2, probability: "High", type: "2mark" },
  { text: "How does Sam's character add irony to the story?", marks: 3, probability: "High", type: "3mark" },
  { text: "Why did Charley want to go to 1894 Galesburg?", marks: 3, probability: "Important", type: "3mark" },
  { text: "The Third Level explores escapism as a response to the pressures of modern life. Discuss how Finney uses the ambiguity of reality and fantasy.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-16"] = [
  { text: "What is the central irony of 'The Tiger King'?", marks: 2, probability: "High", type: "2mark" },
  { text: "How did the Tiger King try to defy the prophecy?", marks: 2, probability: "Important", type: "2mark" },
  { text: "What is the significance of the 100th tiger not being killed by the king?", marks: 3, probability: "High", type: "3mark" },
  { text: "Discuss the satirical elements in 'The Tiger King'.", marks: 3, probability: "High", type: "3mark" },
  { text: "'The Tiger King' is a brilliant satire on the arrogance of power and the futility of defying fate. Discuss with reference to the plot and the ironic ending.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-17"] = [
  { text: "What is Gondwana? Why is it significant?", marks: 2, probability: "High", type: "2mark" },
  { text: "How do ice cores help in studying climate change?", marks: 2, probability: "High", type: "2mark" },
  { text: "What is 'Students on Ice'? What is its purpose?", marks: 3, probability: "Important", type: "3mark" },
  { text: "Why is Antarctica important for scientific research?", marks: 3, probability: "High", type: "3mark" },
  { text: "Tishani Doshi uses her Antarctic journey to reflect on geological history and climate change. Discuss the key insights from 'Journey to the End of the Earth'.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-18"] = [
  { text: "What is the central conflict in 'The Enemy'?", marks: 2, probability: "High", type: "2mark" },
  { text: "Why did Sadao help the enemy soldier?", marks: 2, probability: "High", type: "2mark" },
  { text: "How does the General's character add irony to the story?", marks: 3, probability: "Important", type: "3mark" },
  { text: "What role do the servants play in the story?", marks: 3, probability: "High", type: "3mark" },
  { text: "'The Enemy' explores the conflict between medical duty and patriotism. Discuss how Dr. Sadao resolves this dilemma and what his choice reveals about humanity.", marks: 5, probability: "High", type: "5mark" },
  { text: "HOTS: 'The Enemy' suggests that in times of war, personal ethics are tested in ways that reveal one's true character. Do you agree? Discuss with reference to Sadao, Hana, and the General.", marks: 5, probability: "Medium", type: "hots" },
];

questionsRegistry["english-19"] = [
  { text: "How does Mr. Lamb try to change Derry's attitude?", marks: 2, probability: "High", type: "2mark" },
  { text: "What is the significance of the open garden gate?", marks: 2, probability: "Important", type: "2mark" },
  { text: "How is Mr. Lamb's attitude different from Derry's?", marks: 3, probability: "High", type: "3mark" },
  { text: "What is the significance of the ending?", marks: 3, probability: "High", type: "3mark" },
  { text: "'On the Face of It' conveys the message that the real disability is not physical but attitudinal. Discuss with reference to Derry and Mr. Lamb.", marks: 5, probability: "High", type: "5mark" },
];

questionsRegistry["english-20"] = [
  { text: "How are the experiences of Zitkala-Sa and Bama similar?", marks: 2, probability: "High", type: "2mark" },
  { text: "What is the significance of Annan's advice to Bama?", marks: 2, probability: "High", type: "2mark" },
  { text: "Why is the title 'Memories of Childhood' significant?", marks: 3, probability: "Important", type: "3mark" },
  { text: "How does Zitkala-Sa's hair cutting symbolise cultural oppression?", marks: 3, probability: "High", type: "3mark" },
  { text: "Both Zitkala-Sa and Bama experienced discrimination as children from marginalised communities. Compare their experiences, forms of resistance, and the common theme that connects them.", marks: 5, probability: "High", type: "5mark" },
  { text: "HOTS: 'Education is the most powerful weapon against systemic discrimination.' Discuss with reference to Bama's story in 'Memories of Childhood'.", marks: 5, probability: "Medium", type: "hots" },
];

export function getBoardPredictorQuestions(subjectId: string, chapterId: number): PredictedQuestion[] {
  return questionsRegistry[`${subjectId}-${chapterId}`] || [];
}
