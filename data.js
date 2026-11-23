/* Outlier question bank.
   List prompts: answers grouped by tier. "A|B|C" means A is shown, B and C are also accepted.
   mode = everyone says it, cliche = the pick that feels clever but isn't, mean = solid,
   tail = uncommon, far = very rare. "gem" is the designated Outlier answer (100 points).
   person: true also accepts a person's surname on its own.
   strip: words ignored when matching (so "Poisson distribution" matches "Poisson"). */

window.OUTLIER_LISTS = [
  {
    id: 'mathematicians', person: true,
    text: 'Name a mathematician born before 1900',
    mode: ['Pythagoras', 'Isaac Newton', 'Euclid', 'Archimedes', 'Leonhard Euler', 'Carl Friedrich Gauss'],
    cliche: ['Srinivasa Ramanujan', 'Fibonacci|Leonardo of Pisa|Leonardo Bonacci'],
    mean: ['Gottfried Leibniz|Leibnitz', 'René Descartes', 'Blaise Pascal', 'Pierre de Fermat', 'Bernhard Riemann', 'Évariste Galois',
      'Ada Lovelace', 'Georg Cantor', 'David Hilbert', 'Joseph-Louis Lagrange', 'Pierre-Simon Laplace', 'Joseph Fourier',
      'Jacob Bernoulli|Bernoulli|Daniel Bernoulli|Johann Bernoulli', 'Augustin-Louis Cauchy', 'Al-Khwarizmi|Muhammad ibn Musa al-Khwarizmi', 'Hypatia',
      'John Napier', 'Johannes Kepler', 'George Boole', 'Charles Babbage', 'G. H. Hardy|Godfrey Harold Hardy|GH Hardy'],
    tail: ['Emmy Noether', 'Henri Poincaré', 'Niels Henrik Abel', 'Carl Jacobi', 'Peter Gustav Lejeune Dirichlet', 'Karl Weierstrass',
      'Richard Dedekind', 'Sofia Kovalevskaya|Kovalevskaia|Sofia Kovalevskaia', 'Brahmagupta', 'Aryabhata', 'Omar Khayyam', 'Gerolamo Cardano|Cardan',
      'Niccolò Tartaglia', 'Eratosthenes', 'Apollonius of Perga|Apollonius', 'Diophantus', 'Thales', 'Zeno of Elea|Zeno', 'William Rowan Hamilton',
      'Arthur Cayley', 'James Joseph Sylvester', 'Nikolai Lobachevsky', 'János Bolyai', 'Charles Hermite', 'Adrien-Marie Legendre', 'Gaspard Monge',
      'August Ferdinand Möbius|Mobius', 'Felix Klein', 'Sophus Lie', 'Giuseppe Peano', 'Gottlob Frege', 'John Venn', 'Augustus De Morgan',
      'John Wallis', 'Christiaan Huygens', 'Marin Mersenne', 'François Viète|Vieta', 'Simon Stevin', 'L. E. J. Brouwer|Brouwer', 'J. E. Littlewood|Littlewood',
      'Henri Lebesgue', 'Hermann Minkowski', 'Andrey Markov', 'Sophie Germain', 'Bhaskara II|Bhaskara|Bhaskaracharya', 'Ptolemy'],
    far: ['Madhava of Sangamagrama|Madhava', 'Liu Hui', 'Qin Jiushao', 'Jamshid al-Kashi|al-Kashi', 'Ibn al-Haytham|Alhazen', 'Luca Pacioli',
      'Regiomontanus', 'Nicole Oresme', 'Bonaventura Cavalieri', 'Evangelista Torricelli', 'Girard Desargues', 'William Brouncker', 'Isaac Barrow',
      'James Gregory', 'Colin Maclaurin', 'James Stirling', 'Abraham de Moivre', 'Johann Heinrich Lambert', 'Jean le Rond d\'Alembert', 'Alexis Clairaut',
      'Jakob Steiner', 'Julius Plücker', 'Hermann Grassmann', 'Ernst Kummer', 'Leopold Kronecker', 'Gotthold Eisenstein', 'Pafnuty Chebyshev',
      'Aleksandr Lyapunov', 'Jacques Hadamard', 'Émile Borel', 'Adolf Hurwitz', 'Ferdinand Georg Frobenius', 'John Pell', 'Charlotte Angas Scott',
      'Philippa Fawcett', 'Alicia Boole Stott', 'Mary Somerville', 'Maria Gaetana Agnesi|Agnesi', 'Émilie du Châtelet'],
    gem: 'Zu Chongzhi',
    gemNote: 'Worked out π to seven decimal places in the 5th century, a record that stood for almost a thousand years.'
  },
  {
    id: 'women', person: true,
    text: 'Name a female mathematician (any era)',
    mode: ['Ada Lovelace', 'Hypatia'],
    cliche: ['Katherine Johnson'],
    mean: ['Emmy Noether', 'Maryam Mirzakhani', 'Sofia Kovalevskaya|Kovalevskaia', 'Sophie Germain', 'Florence Nightingale', 'Hannah Fry', 'Grace Hopper',
      'Dorothy Vaughan', 'Mary Jackson'],
    tail: ['Mary Somerville', 'Julia Robinson', 'Karen Uhlenbeck', 'Maryna Viazovska', 'Ingrid Daubechies', 'Émilie du Châtelet', 'Maria Gaetana Agnesi|Agnesi',
      'Mary Cartwright', 'Shakuntala Devi', 'Eugenia Cheng', 'Ruth Lawrence', 'Grace Chisholm Young', 'Dusa McDuff', 'Frances Kirwan'],
    far: ['Olga Taussky-Todd|Olga Taussky', 'Cathleen Morawetz', 'Marina Ratner', 'Alicia Boole Stott', 'Mary Everest Boole', 'Charlotte Angas Scott',
      'Emma Lehmer', 'Mina Rees', 'Dorothy Lewis Bernstein', 'Olga Ladyzhenskaya', 'Kathleen Ollerenshaw', 'Hanna Neumann', 'Mary Wynne Warner',
      'Ida Rhodes', 'Joan Clarke', 'Gertrude Blanch', 'Marjorie Lee Browne', 'Euphemia Lofton Haynes', 'Ruth Moufang', 'Wang Zhenyi'],
    gem: 'Philippa Fawcett',
    gemNote: 'In 1890 she was placed "above the Senior Wrangler", beating every man in the Cambridge maths exams.'
  },
  {
    id: 'constants', strip: ['constant', 'number', 'the'],
    text: 'Name a mathematical constant',
    mode: ['Pi|π|3.14|3.14159', 'e|Euler\'s number|Eulers number|Napier\'s constant|2.718'],
    cliche: ['Golden ratio|phi|φ|1.618'],
    mean: ['Square root of 2|√2|root 2|sqrt 2|Pythagoras\' constant', 'i|imaginary unit|√-1', 'Euler–Mascheroni constant|Euler-Mascheroni|gamma|γ', 'Tau|τ|2π'],
    tail: ['Apéry\'s constant|Apery|ζ(3)|zeta 3', 'Catalan\'s constant|Catalan', 'Feigenbaum constant|Feigenbaum', 'Silver ratio', 'Liouville\'s constant|Liouville',
      'Champernowne constant|Champernowne', 'Gelfond\'s constant|e^π|e to the pi', 'Square root of 3|√3|Theodorus\' constant', 'Twin prime constant'],
    far: ['Khinchin\'s constant|Khinchin|Khintchine', 'Conway\'s constant|Conway', 'Plastic number|plastic ratio', 'Glaisher–Kinkelin constant|Glaisher',
      'Omega constant|Ω', 'Brun\'s constant|Brun', 'Mills\' constant|Mills', 'Chaitin\'s constant|Chaitin', 'Copeland–Erdős constant|Copeland-Erdos',
      'Lévy\'s constant|Levy', 'Gauss\'s constant', 'Lemniscate constant|ϖ', 'Cahen\'s constant|Cahen', 'Meissel–Mertens constant|Mertens',
      'Landau–Ramanujan constant', 'Gompertz constant', 'Prouhet–Thue–Morse constant'],
    gem: 'Dottie number',
    gemNote: 'Type any number into a calculator and press cos over and over: you always end up at 0.739085…, the solution of cos x = x.'
  },
  {
    id: 'branches', strip: ['theory', 'the', 'mathematics', 'maths'],
    text: 'Name a branch of mathematics',
    mode: ['Algebra', 'Geometry', 'Calculus', 'Statistics', 'Trigonometry'],
    cliche: ['Topology'],
    mean: ['Probability', 'Arithmetic', 'Number theory', 'Combinatorics', 'Linear algebra', 'Mechanics', 'Set theory', 'Logic|mathematical logic', 'Graph theory', 'Analysis'],
    tail: ['Real analysis', 'Complex analysis', 'Differential geometry', 'Group theory', 'Game theory', 'Cryptography', 'Numerical analysis', 'Abstract algebra',
      'Discrete mathematics|discrete maths', 'Differential equations', 'Fluid dynamics', 'Category theory', 'Knot theory', 'Dynamical systems|chaos theory',
      'Information theory', 'Fractal geometry', 'Operations research', 'Vector calculus'],
    far: ['Algebraic geometry', 'Measure theory', 'Functional analysis', 'Ergodic theory', 'Representation theory', 'Homological algebra', 'Model theory',
      'K-theory', 'Galois theory', 'Harmonic analysis', 'Ramsey theory', 'Symplectic geometry', 'Iwasawa theory', 'Arithmetic geometry',
      'Noncommutative geometry', 'Algebraic topology', 'Order theory', 'Proof theory', 'Recursion theory|computability theory', 'Lie theory', 'Potential theory'],
    gem: 'Tropical geometry',
    gemNote: 'Geometry where "addition" means taking the minimum and "multiplication" means adding. It turns curves into piecewise-linear skeletons.'
  },
  {
    id: 'polyhedra',
    text: 'Name a 3D shape with flat faces (a polyhedron)',
    mode: ['Cube', 'Tetrahedron|triangular pyramid', 'Pyramid|square-based pyramid|square pyramid', 'Prism|triangular prism'],
    cliche: ['Icosahedron|d20'],
    mean: ['Octahedron', 'Dodecahedron', 'Cuboid|rectangular prism|box', 'Hexagonal prism', 'Pentagonal prism', 'Pentagonal pyramid', 'Hexagonal pyramid'],
    tail: ['Truncated icosahedron|football', 'Rhombic dodecahedron', 'Cuboctahedron', 'Icosidodecahedron', 'Octagonal prism', 'Antiprism|square antiprism',
      'Truncated tetrahedron', 'Truncated cube', 'Truncated octahedron', 'Snub cube', 'Stellated octahedron|stella octangula', 'Triangular bipyramid',
      'Parallelepiped', 'Rhombohedron', 'Frustum'],
    far: ['Rhombicuboctahedron', 'Snub dodecahedron', 'Great stellated dodecahedron', 'Small stellated dodecahedron', 'Great icosahedron', 'Great dodecahedron',
      'Császár polyhedron|Csaszar polyhedron', 'Gyroelongated square bipyramid', 'Pentagonal icositetrahedron', 'Disdyakis triacontahedron',
      'Rhombicosidodecahedron', 'Truncated cuboctahedron', 'Truncated dodecahedron', 'Rhombic triacontahedron', 'Pentakis dodecahedron', 'Deltoidal hexecontahedron',
      'Elongated square gyrobicupola', 'Tetrakis hexahedron'],
    gem: 'Szilassi polyhedron',
    gemNote: 'Seven hexagonal faces, and every face touches every other one. It shows a map on a torus can need seven colours.'
  },
  {
    id: 'greek', strip: ['letter'],
    text: 'Name a Greek letter that mathematicians use',
    mode: ['Pi|π', 'Theta|θ', 'Alpha|α', 'Sigma|σ|Σ'],
    cliche: ['Omega|ω|Ω'],
    mean: ['Beta|β', 'Delta|δ|Δ', 'Lambda|λ', 'Mu|μ', 'Gamma|γ', 'Epsilon|ε', 'Phi|φ', 'Rho|ρ', 'Tau|τ'],
    tail: ['Psi|ψ', 'Chi|χ', 'Zeta|ζ', 'Eta|η', 'Kappa|κ', 'Xi|ξ', 'Nu|ν'],
    far: ['Iota|ι', 'Omicron|ο'],
    gem: 'Upsilon|υ',
    gemNote: 'One of the very few Greek letters with almost no regular job in mathematics.'
  },
  {
    id: 'distributions', strip: ['distribution', 'the'],
    text: 'Name a probability distribution',
    mode: ['Normal|Gaussian|bell curve', 'Binomial'],
    cliche: ['Poisson'],
    mean: ['Uniform', 'Geometric', 'Exponential', 'Bernoulli'],
    tail: ['Chi-squared|chi squared|chi-square', 'Student\'s t|t-distribution|t distribution|t', 'Gamma', 'Beta', 'Negative binomial', 'Hypergeometric',
      'Log-normal|lognormal', 'Cauchy', 'F|F-distribution|Fisher', 'Weibull', 'Multinomial', 'Triangular'],
    far: ['Pareto', 'Gumbel', 'Laplace', 'Rayleigh', 'Logistic', 'Dirichlet', 'Wishart', 'Zipf', 'Benford', 'Von Mises', 'Erlang', 'Maxwell–Boltzmann',
      'Lévy|Levy', 'Skellam', 'Kumaraswamy', 'Rademacher', 'Beta-binomial', 'Wigner semicircle|semicircle'],
    gem: 'Tracy–Widom|Tracy Widom',
    gemNote: 'Describes the largest eigenvalue of a big random matrix, and it keeps turning up in physics and in growing crystals.'
  },
  {
    id: 'unsolved', strip: ['the', 'conjecture', 'problem', 'hypothesis'],
    text: 'Name a famous unsolved problem in mathematics',
    mode: ['Riemann hypothesis|Riemann', 'Goldbach conjecture|Goldbach'],
    cliche: ['Collatz conjecture|Collatz|3n+1|3x+1'],
    mean: ['Twin prime conjecture|twin primes|twin prime', 'P versus NP|P vs NP|P=NP|P = NP'],
    tail: ['Navier–Stokes existence and smoothness|Navier Stokes|Navier-Stokes', 'Birch and Swinnerton-Dyer conjecture|BSD|Birch Swinnerton Dyer',
      'Hodge conjecture|Hodge', 'Yang–Mills existence and mass gap|Yang Mills|Yang-Mills', 'Odd perfect numbers|odd perfect number',
      'Legendre\'s conjecture|Legendre', 'Landau\'s problems'],
    far: ['Lonely runner conjecture|lonely runner', 'Hadwiger–Nelson problem|Hadwiger Nelson', 'Inscribed square problem|Toeplitz|square peg problem',
      'Erdős–Straus conjecture|Erdos Straus', 'Jacobian conjecture', 'Schanuel\'s conjecture|Schanuel', 'Union-closed sets conjecture|Frankl',
      'Sunflower conjecture', 'Gilbreath\'s conjecture|Gilbreath', 'Happy ending problem', 'Brocard\'s problem|Brocard', 'Unknotting problem',
      'Lehmer\'s totient problem', 'Carmichael\'s totient conjecture'],
    gem: 'Perfect cuboid|perfect Euler brick',
    gemNote: 'Nobody knows whether a box exists whose edges, face diagonals and space diagonal are all whole numbers.'
  },
  {
    id: 'polygons', strip: ['regular'],
    text: 'Name a 2D shape with straight sides (a polygon)',
    mode: ['Triangle', 'Square', 'Pentagon', 'Hexagon', 'Rectangle'],
    cliche: ['Dodecagon'],
    mean: ['Octagon', 'Rhombus', 'Trapezium|trapezoid', 'Kite', 'Parallelogram', 'Quadrilateral'],
    tail: ['Heptagon|septagon', 'Nonagon|enneagon', 'Decagon', 'Hendecagon|undecagon', 'Icosagon', 'Deltoid|arrowhead|dart', 'Star polygon|pentagram', 'Hexagram'],
    far: ['Tridecagon', 'Tetradecagon', 'Pentadecagon', 'Hexadecagon', 'Enneadecagon', 'Icositetragon', 'Triacontagon', 'Hectogon', 'Chiliagon',
      'Myriagon', 'Megagon', 'Apeirogon', 'Octagram', 'Decagram', 'Heptagram'],
    gem: 'Heptadecagon',
    gemNote: 'At 19, Gauss showed the 17-sided polygon can be drawn with a ruler and compass, and asked for it on his gravestone.'
  },
  {
    id: 'sequences', strip: ['sequence', 'numbers', 'number', 'the', 'series'],
    text: 'Name a famous sequence of numbers',
    mode: ['Fibonacci', 'Prime numbers|primes', 'Square numbers|squares'],
    cliche: ['Look-and-say|look and say'],
    mean: ['Triangular numbers|triangular', 'Even numbers|even', 'Odd numbers|odd', 'Cube numbers|cubes', 'Powers of two|powers of 2', 'Factorials',
      'Arithmetic', 'Geometric', 'Multiples'],
    tail: ['Catalan numbers|Catalan', 'Lucas numbers|Lucas', 'Pell numbers|Pell', 'Bell numbers|Bell', 'Recamán\'s sequence|Recaman', 'Tribonacci',
      'Pentagonal numbers', 'Hexagonal numbers', 'Mersenne numbers|Mersenne primes|Mersenne', 'Fermat numbers|Fermat primes', 'Perfect numbers',
      'Harmonic numbers|harmonic', 'Collatz', 'Tetrahedral numbers'],
    far: ['Padovan', 'Sylvester\'s sequence|Sylvester', 'Busy beaver', 'Ulam numbers|Ulam', 'Golomb', 'Thue–Morse|Thue Morse|Prouhet–Thue–Morse',
      'Stern\'s diatomic|Stern–Brocot|Stern', 'Hofstadter Q|Hofstadter', 'Motzkin', 'Euler numbers|zigzag numbers', 'Bernoulli numbers|Bernoulli',
      'Lazy caterer\'s|lazy caterer', 'Perrin', 'Jacobsthal', 'Partition numbers|partitions', 'Happy numbers', 'Sorting numbers'],
    gem: 'Kolakoski',
    gemNote: '1, 2, 2, 1, 1, 2, 1, 2, 2, 1… The sequence describes its own run lengths, and nobody has proved it has as many 1s as 2s.'
  },
  {
    id: 'fractals', strip: ['the', 'fractal', 'set'],
    text: 'Name a famous fractal',
    mode: ['Mandelbrot set|Mandelbrot'],
    cliche: ['Koch snowflake|Koch|snowflake|Koch curve'],
    mean: ['Sierpiński triangle|Sierpinski triangle|Sierpinski gasket|Sierpinski', 'Julia set|Julia', 'Cantor set|Cantor'],
    tail: ['Menger sponge|Menger', 'Dragon curve|Heighway dragon|dragon', 'Barnsley fern|fern', 'Hilbert curve|Hilbert', 'Sierpiński carpet|Sierpinski carpet',
      'Peano curve|Peano', 'Lorenz attractor|Lorenz', 'Pythagoras tree', 'Romanesco broccoli'],
    far: ['Lévy C curve|Levy C', 'Burning Ship', 'Vicsek fractal|Vicsek', 'Gosper curve|flowsnake|Gosper', 'Newton fractal', 'Mandelbox', 'Mandelbulb',
      'Rauzy fractal|Rauzy', 'Weierstrass function|Weierstrass', 'Takagi curve|blancmange curve|Takagi|blancmange', 'Cesàro fractal', 'T-square', 'Hénon attractor|Henon',
      'Minkowski sausage', 'Lyapunov fractal'],
    gem: 'Apollonian gasket',
    gemNote: 'Keep filling the gaps between touching circles with more circles, forever. Some versions have only whole-number curvatures.'
  },
  {
    id: 'paradoxes', strip: ['paradox', 'the', 'problem'],
    text: 'Name a paradox from maths or logic',
    mode: ['Zeno\'s paradox|Zeno|Achilles and the tortoise|dichotomy', 'Monty Hall'],
    cliche: ['Banach–Tarski|Banach Tarski'],
    mean: ['Russell\'s paradox|Russell|barber', 'Birthday', 'Hilbert\'s hotel|Grand Hotel|Hilbert', 'Liar|liar paradox'],
    tail: ['Simpson\'s|Simpson', 'Gabriel\'s horn|painter\'s', 'Coastline', 'St Petersburg|Saint Petersburg', 'Two envelopes', 'Sorites|heap',
      'Berry', 'Unexpected hanging|surprise exam', 'Sleeping Beauty', 'Newcomb\'s|Newcomb', 'Boy or girl', 'Friendship', 'Raven|Hempel'],
    far: ['Richard\'s|Richard', 'Curry\'s|Curry', 'Bertrand\'s box|Bertrand', 'Skolem\'s|Skolem', 'Galileo\'s|Galileo', 'Parrondo\'s|Parrondo',
      'Potato', 'Burali-Forti', 'Grelling–Nelson|Grelling', 'Cantor\'s', 'Hausdorff', 'Ellsberg', 'Allais', 'Lindley\'s', 'Borel–Kolmogorov'],
    gem: 'Braess\'s paradox|Braess',
    gemNote: 'Adding a new road to a network can make everyone\'s journey slower. Closing roads has genuinely cut traffic in real cities.'
  },
  {
    id: 'fields', person: true,
    text: 'Name a Fields Medal winner (1936–2022)',
    mode: ['Terence Tao', 'Maryam Mirzakhani'],
    cliche: ['Grigori Perelman'],
    mean: ['Peter Scholze', 'Maryna Viazovska', 'Alexander Grothendieck', 'Jean-Pierre Serre', 'Michael Atiyah', 'Timothy Gowers|Tim Gowers', 'Edward Witten',
      'Stephen Smale', 'John Milnor', 'Manjul Bhargava', 'James Maynard', 'June Huh', 'Cédric Villani'],
    tail: ['Martin Hairer', 'Artur Avila', 'Akshay Venkatesh', 'Caucher Birkar', 'Alessio Figalli', 'Hugo Duminil-Copin', 'Ngô Bảo Châu|Ngo Bao Chau',
      'Stanislav Smirnov', 'Elon Lindenstrauss', 'Andrei Okounkov', 'Wendelin Werner', 'Vladimir Voevodsky', 'Richard Borcherds', 'Maxim Kontsevich',
      'Curtis McMullen', 'Jean Bourgain', 'Simon Donaldson', 'Michael Freedman', 'William Thurston', 'Shing-Tung Yau', 'Alain Connes', 'Pierre Deligne',
      'Daniel Quillen', 'Paul Cohen', 'Klaus Roth', 'Alan Baker', 'Vaughan Jones', 'Gerd Faltings', 'Charles Fefferman'],
    far: ['Lars Ahlfors', 'Laurent Schwartz', 'Atle Selberg', 'Kunihiko Kodaira', 'René Thom', 'Lars Hörmander|Hormander', 'Heisuke Hironaka',
      'Sergei Novikov', 'John G. Thompson|John Thompson', 'Enrico Bombieri', 'David Mumford', 'Grigory Margulis', 'Shigefumi Mori', 'Vladimir Drinfeld',
      'Efim Zelmanov', 'Pierre-Louis Lions', 'Jean-Christophe Yoccoz', 'Laurent Lafforgue'],
    gem: 'Jesse Douglas',
    gemNote: 'One of the first two winners in 1936, for solving Plateau\'s problem about soap-film surfaces.'
  },
  {
    id: 'numbertypes', strip: ['numbers', 'number', 'the'],
    text: 'Name a type of number',
    mode: ['Prime', 'Integer|integers', 'Natural|natural numbers', 'Even', 'Odd'],
    cliche: ['Imaginary'],
    mean: ['Rational', 'Real', 'Complex', 'Irrational', 'Whole', 'Negative', 'Square', 'Composite', 'Decimal', 'Fraction|fractions'],
    tail: ['Transcendental', 'Algebraic', 'Quaternion|quaternions', 'Perfect', 'Triangular', 'Amicable', 'Happy', 'Cube', 'Fibonacci', 'Mersenne',
      'Palindromic', 'Abundant', 'Deficient', 'Gaussian integers|Gaussian integer', 'Cardinal', 'Ordinal', 'Semiprime'],
    far: ['Surreal', 'Hyperreal', 'p-adic|padic', 'Octonion|octonions', 'Sedenion|sedenions', 'Eisenstein integers|Eisenstein', 'Dual', 'Split-complex',
      'Constructible', 'Computable', 'Normal', 'Carmichael', 'Harshad|Niven', 'Kaprekar', 'Narcissistic|Armstrong', 'Sociable', 'Lychrel', 'Smith',
      'Untouchable', 'Highly composite', 'Polite', 'Weird', 'Hypercomplex'],
    gem: 'Vampire',
    gemNote: 'A vampire number splits into two "fangs" that use its digits exactly: 1260 = 21 × 60.'
  },
  {
    id: 'proofs', strip: ['proof', 'by', 'the', 'method', 'argument', 'of', 'principle'],
    text: 'Name a technique for proving things',
    mode: ['Induction|mathematical induction', 'Contradiction|reductio ad absurdum'],
    cliche: ['Proof without words'],
    mean: ['Direct proof|direct', 'Contrapositive', 'Exhaustion|cases|proof by cases', 'Counterexample', 'Deduction'],
    tail: ['Pigeonhole', 'Diagonal argument|diagonalisation|diagonalization|Cantor\'s diagonal', 'Strong induction', 'Construction|constructive proof',
      'Computer-assisted proof|computer proof', 'Double counting', 'Bijective proof|bijection', 'Infinitesimals'],
    far: ['Probabilistic method', 'Transfinite induction', 'Forcing', 'Compactness', 'Telescoping', 'Extremal principle', 'Invariant|invariants',
      'Well-ordering', 'Zorn\'s lemma|Zorn', 'Combinatorial proof', 'Formal verification|Lean', 'Method of exhaustion (Eudoxus and Archimedes)|Eudoxus|Archimedes method'],
    gem: 'Infinite descent',
    gemNote: 'Fermat\'s favourite: show that any solution would produce a smaller one, forever, which is impossible for whole numbers.'
  },
  {
    id: 'puzzles', strip: ['the', 'puzzle', 'problem'],
    text: 'Name a famous maths puzzle or problem',
    mode: ['Tower of Hanoi|Towers of Hanoi', 'Sudoku', 'Monty Hall'],
    cliche: ['Seven Bridges of Königsberg|Konigsberg|bridges of Konigsberg'],
    mean: ['Rubik\'s cube|Rubiks cube', 'Magic square', 'Eight queens|8 queens|n queens', 'Knight\'s tour', 'Travelling salesman|traveling salesman',
      'Four colour|four color|map colouring', 'Wolf, goat and cabbage|river crossing|fox goose and beans'],
    tail: ['Fifteen puzzle|15 puzzle', 'Nine dots', 'Einstein\'s riddle|zebra puzzle', 'Josephus', 'Missionaries and cannibals', 'Tangram', 'Kakuro',
      'Cheryl\'s birthday', 'Blue-eyed islanders|blue eyes', 'Prisoners and hats|hat puzzle', 'Two eggs|egg drop', 'Soma cube', 'Pentominoes|pentomino',
      'Monkey and the coconuts|monkey and coconuts', 'Water pouring|die hard jugs', 'Birthday problem', 'Secretary problem'],
    far: ['Langley\'s adventitious angles|adventitious angles', 'Muddy children', '100 prisoners|hundred prisoners', 'Instant Insanity', 'Lights Out',
      'Sam Loyd\'s', 'Bridge and torch', 'Utility problem|three utilities', 'Thirty-six officers|36 officers',
      'Dudeney\'s dissection|haberdasher', 'Mutilated chessboard', 'Sleeping barber', 'Pirate game', 'Coin weighing|twelve coins|12 coins'],
    gem: 'Kirkman\'s schoolgirl problem|Kirkman',
    gemNote: 'Fifteen schoolgirls walk out in threes every day for a week. Can they be arranged so no two walk together twice? (Yes.)'
  },
  {
    id: 'calculus', strip: ['rule', 'the', 'method', 'by'],
    text: 'Name a rule or technique from calculus',
    mode: ['Chain rule', 'Product rule', 'Integration by parts|by parts'],
    cliche: ['L\'Hôpital\'s rule|L\'Hopital|Lhopital|L Hospital'],
    mean: ['Quotient rule', 'Substitution|integration by substitution|u-substitution', 'Power rule', 'Differentiation from first principles|first principles',
      'Partial fractions', 'Implicit differentiation'],
    tail: ['Trapezium rule|trapezoidal rule|trapezoid rule', 'Simpson\'s rule|Simpson', 'Newton–Raphson|Newton Raphson|Newton\'s method',
      'Taylor series|Taylor', 'Maclaurin series|Maclaurin', 'Integrating factor', 'Separation of variables', 'Reduction formula',
      'Fundamental theorem of calculus', 'Parametric differentiation', 'Logarithmic differentiation', 'Mean value theorem'],
    far: ['Weierstrass substitution|tangent half-angle|t-substitution', 'Contour integration|residue theorem', 'Laplace transform', 'Euler substitution',
      'Lagrange multipliers', 'Squeeze theorem|sandwich theorem', 'Rolle\'s theorem|Rolle', 'Leibniz rule for nth derivative', 'Euler method',
      'Gaussian integral trick|polar coordinates trick', 'Dirichlet integral', 'Stokes\' theorem|Stokes', 'Green\'s theorem|Green', 'Jacobian'],
    gem: 'Feynman\'s trick|differentiation under the integral sign|Leibniz integral rule|Feynman',
    gemNote: 'Put a parameter inside an integral, differentiate with respect to it, then integrate back. Feynman learned it from an old textbook and used it everywhere.'
  },
  {
    id: 'games', strip: ['the', 'game', 'dilemma'],
    text: 'Name a game studied in game theory',
    mode: ['Prisoner\'s dilemma|prisoners dilemma|prisoner'],
    cliche: ['Rock paper scissors|rock-paper-scissors'],
    mean: ['Chicken|hawk-dove|hawk dove', 'Noughts and crosses|tic-tac-toe|tic tac toe', 'Chess', 'Nim', 'Stag hunt', 'Ultimatum'],
    tail: ['Matching pennies', 'Battle of the sexes', 'Dictator', 'Centipede', 'Go', 'Public goods', 'Hex', 'Poker', 'Tragedy of the commons',
      'Trust game', 'Volunteer\'s dilemma'],
    far: ['El Farol Bar|El Farol', 'Dollar auction', 'Pirate game|pirates', 'Keynesian beauty contest|beauty contest|guess two thirds of the average',
      'Traveller\'s dilemma', 'Chomp', 'Sprouts', 'Diner\'s dilemma', 'War of attrition', 'Shapley value', 'Bargaining', 'Cournot', 'Bertrand',
      'Stackelberg', 'Hackenbush'],
    gem: 'Colonel Blotto|Blotto',
    gemNote: 'Two generals split their troops across several battlefields at once. No single strategy always wins.'
  },
  {
    id: 'algorithms', strip: ['algorithm', 'the', 's', 'method'],
    text: 'Name a famous algorithm',
    mode: ['Euclid\'s algorithm|Euclidean algorithm|Euclid', 'Binary search', 'Bubble sort'],
    cliche: ['Sieve of Eratosthenes|Eratosthenes'],
    mean: ['Quicksort|quick sort', 'Merge sort', 'Dijkstra\'s|Dijkstra', 'Newton\'s method|Newton–Raphson', 'RSA', 'PageRank|Google PageRank',
      'Insertion sort', 'Selection sort', 'Long division', 'Linear search'],
    tail: ['Fast Fourier transform|FFT', 'A*|A star', 'Kruskal\'s|Kruskal', 'Prim\'s|Prim', 'Gaussian elimination', 'Simplex', 'Heap sort|heapsort',
      'Breadth-first search|BFS', 'Depth-first search|DFS', 'Huffman coding|Huffman', 'Minimax', 'Bisection', 'Extended Euclidean', 'Floyd–Warshall|Floyd Warshall',
      'Bellman–Ford|Bellman Ford', 'k-means|k means', 'Shor\'s|Shor', 'Grover\'s|Grover'],
    far: ['Karatsuba', 'Strassen', 'Metropolis–Hastings|Metropolis', 'Ford–Fulkerson', 'Lempel–Ziv|LZ77|LZW', 'Miller–Rabin|Miller Rabin', 'AKS primality|AKS',
      'Pollard\'s rho|Pollard', 'Fisher–Yates shuffle|Fisher Yates|Knuth shuffle', 'Bresenham', 'Tarjan\'s|Tarjan', 'Viterbi', 'Boyer–Moore', 'Knuth–Morris–Pratt|KMP',
      'Lenstra–Lenstra–Lovász|LLL', 'Schönhage–Strassen', 'Baby-step giant-step', 'Collatz'],
    gem: 'Gale–Shapley|stable marriage|Gale Shapley|deferred acceptance',
    gemNote: 'Pairs people up so that no two would rather be with each other. It is used to match junior doctors to hospitals, and won a Nobel Prize.'
  },
  {
    id: 'millennium', strip: ['the', 'conjecture', 'problem', 'hypothesis', 'existence', 'and', 'smoothness', 'mass', 'gap'],
    text: 'Name one of the seven Millennium Prize Problems',
    mode: ['Riemann hypothesis|Riemann', 'P versus NP|P vs NP|P=NP|P = NP'],
    cliche: ['Poincaré conjecture|Poincare'],
    mean: ['Navier–Stokes existence and smoothness|Navier Stokes|Navier-Stokes'],
    tail: ['Yang–Mills existence and mass gap|Yang Mills|Yang-Mills', 'Hodge conjecture|Hodge'],
    far: [],
    gem: 'Birch and Swinnerton-Dyer conjecture|BSD|Birch Swinnerton Dyer|Birch and Swinnerton Dyer',
    gemNote: 'Predicts whether an elliptic curve has infinitely many rational points from the behaviour of one function at a single point.'
  },
  {
    id: 'triangles', strip: ['triangle', 'triangles', 'angled'],
    text: 'Name a type of triangle',
    mode: ['Equilateral', 'Isosceles', 'Right-angled|right|right angle'],
    cliche: ['Penrose triangle|impossible triangle|Penrose'],
    mean: ['Scalene', 'Acute', 'Obtuse', 'Equiangular'],
    tail: ['Sierpiński triangle|Sierpinski', 'Reuleaux triangle|Reuleaux', 'Pascal\'s triangle|Pascal|Yang Hui\'s triangle|Yang Hui|Tartaglia\'s triangle|Tartaglia', 'Golden triangle', '30-60-90|30 60 90',
      '45-45-90|45 45 90|right isosceles', 'Pythagorean triangle|3-4-5|3 4 5', 'Degenerate', 'Similar', 'Congruent', 'Spherical triangle|spherical'],
    far: ['Kepler triangle|Kepler', 'Heronian triangle|Heronian|Heron', 'Medial triangle|medial', 'Orthic triangle|orthic', 'Pedal triangle|pedal',
      'Contact triangle|intouch triangle', 'Excentral triangle|excentral', 'Schwarz triangle|Schwarz', 'Equable triangle|equable', 'Hyperbolic triangle',
      'Napoleon\'s triangle|Napoleon', 'Calabi triangle|Calabi', 'Bevan', 'Integer triangle', 'Triangle of reference'],
    gem: 'Morley triangle|Morley\'s triangle|Morley',
    gemNote: 'Trisect the three angles of any triangle and the neighbouring trisectors always meet in an equilateral triangle.'
  }
];

/* Numbers in the real world: list prompts whose answers are numbers. */
window.OUTLIER_LISTS.push(
  {
    id: 'popnumbers', hint: 'Type the number',
    text: 'Name a famous number from a book, film, TV show or song',
    mode: ['42: the Answer to Life, the Universe and Everything|42', '007: James Bond|007', '1984: George Orwell\'s novel|1984'],
    cliche: ['666: the Number of the Beast|666'],
    mean: ['101: Dalmatians, and Room 101 in Nineteen Eighty-Four|101', '221B: Sherlock Holmes\'s address on Baker Street|221b|221',
      '9¾: the platform at King\'s Cross in Harry Potter|9 3/4|9.75|9 and 3 quarters', '404: Page Not Found|404',
      '2001: A Space Odyssey|2001', '451: Fahrenheit 451|451', '24: the TV series|24', '300: the film about the Spartans|300',
      '13: Apollo 13|13', '22: Catch-22|22', '1001: the Arabian Nights|1001', '80: Around the World in 80 Days|80',
      '39: The 39 Steps|39', '12: 12 Angry Men|12', '11: Ocean\'s Eleven, and Eleven in Stranger Things|11', '7: Se7en|7'],
    tail: ['237: the room in The Shining|237', '1138: THX 1138|1138', '867-5309: Jenny\'s number in the song|8675309|867 5309',
      '23: The Number 23|23', '127: 127 Hours|127', '28: 28 Days Later|28', '500: (500) Days of Summer|500',
      '20,000: Twenty Thousand Leagues Under the Sea|20000', '1701: the Starship Enterprise, NCC-1701|1701',
      '4 8 15 16 23 42: the numbers in Lost|4 8 15 16 23 42', '2187: Princess Leia\'s cell in Star Wars|2187',
      '5: Slaughterhouse-Five|5', '10: 10 Things I Hate About You|10'],
    far: ['47: the number hidden all through Star Trek|47', '1408: the haunted hotel room|1408', '6: Number Six in The Prisoner|6',
      '86: Agent 86, Maxwell Smart|86', '99: Agent 99, and 99 Red Balloons|99', '2046: the Wong Kar-wai film|2046', '9: District 9|9',
      '8: Super 8|8', '1776: the musical|1776', '3: The Three Musketeers|3'],
    gem: '24601: Jean Valjean\'s prisoner number|24601',
    gemNote: 'Jean Valjean\'s prisoner number in Les Misérables, sung over and over in the musical.'
  },
  {
    id: 'britishyears', hint: 'Type the year',
    text: 'Name a year when something famous happened in British history',
    mode: ['1066: the Battle of Hastings|1066', '1945: the end of the Second World War|1945', '1966: England win the World Cup|1966'],
    cliche: ['1215: Magna Carta|1215'],
    mean: ['1588: the Spanish Armada|1588', '1605: the Gunpowder Plot|1605', '1666: the Great Fire of London|1666', '1815: the Battle of Waterloo|1815',
      '1914: the First World War begins|1914', '1918: the First World War ends, and some women get the vote|1918', '1940: the Battle of Britain|1940',
      '2016: the Brexit referendum|2016', '1805: the Battle of Trafalgar|1805', '1485: the Battle of Bosworth|1485', '1649: Charles I is executed|1649',
      '1953: the coronation of Elizabeth II|1953', '1948: the NHS is founded|1948', '2012: the London Olympics|2012'],
    tail: ['1314: the Battle of Bannockburn|1314', '1381: the Peasants\' Revolt|1381', '1415: the Battle of Agincourt|1415',
      '1603: the Union of the Crowns|1603', '1642: the Civil War begins|1642', '1660: the Restoration|1660', '1688: the Glorious Revolution|1688',
      '1707: the Acts of Union with Scotland|1707', '1801: union with Ireland|1801', '1832: the Great Reform Act|1832', '1851: the Great Exhibition|1851',
      '1928: equal voting rights for women|1928', '1973: Britain joins the EEC|1973', '1997: the handover of Hong Kong|1997', '1086: the Domesday Book|1086',
      '1534: the Act of Supremacy|1534', '1665: the Great Plague of London|1665', '1837: Victoria becomes queen|1837', '1901: Victoria dies|1901',
      '1863: the first London Underground line opens|1863', '1979: Margaret Thatcher becomes prime minister|1979', '2020: Britain leaves the EU|2020'],
    far: ['43: the Roman invasion|43', '1170: Thomas Becket is murdered|1170', '1348: the Black Death arrives|1348', '1476: Caxton sets up his printing press|1476',
      '1536: Anne Boleyn is executed|1536', '1558: Elizabeth I becomes queen|1558', '1620: the Mayflower sails|1620', '1694: the Bank of England is founded|1694',
      '1745: the Jacobite rising|1745', '1833: the Slavery Abolition Act|1833', '1926: the General Strike|1926', '1936: Edward VIII abdicates|1936'],
    gem: '1840: the Penny Black|1840',
    gemNote: 'The Penny Black, the world\'s first adhesive postage stamp, went on sale in May 1840.'
  },
  {
    id: 'sportnumbers', hint: 'Type the number',
    text: 'Name a famous number from sport',
    mode: ['147: a maximum break in snooker|147', '180: the maximum with three darts|180', '11: players in a football or cricket team|11', '18: holes in a round of golf|18'],
    cliche: ['9.58: Usain Bolt\'s 100 m record, in seconds|9.58'],
    mean: ['501: the starting score in darts|501', '26.2: miles in a marathon|26.2', '100: a century in cricket|100', '72: a typical par for a round of golf|72',
      '15: players in a rugby union team|15', '40: a score in tennis|40|15|30', '6: a six in cricket|6', '23: Michael Jordan\'s shirt number|23',
      '10: the classic number 10 shirt|10', '7: the famous number 7 shirt|7', '5: players on a basketball court|5'],
    tail: ['300: a perfect game in ten-pin bowling|300', '13: players in a rugby league team|13', '42.195: kilometres in a marathon|42.195',
      '19.19: Usain Bolt\'s 200 m record, in seconds|19.19', '400: Brian Lara\'s record Test innings|400', '99: Wayne Gretzky\'s shirt number|99',
      '9: a nine-dart finish|9', '170: the highest checkout in darts|170', '22: yards in a cricket pitch|22', '4: a boundary four in cricket|4',
      '50: the bullseye in darts|50', '25: the outer bull in darts|25', '20: overs per side in a T20 match|20'],
    far: ['36: six sixes in one over|36', '6.0: a perfect score in old-style figure skating|6.0', '10.0: a perfect 10 in gymnastics|10.0',
      '24: seconds on the NBA shot clock|24', '3: a three-pointer in basketball|3', '0: love in tennis|0|love', '8: rowers in an eight|8'],
    gem: '155: the highest snooker break with a free ball|155',
    gemNote: 'A free ball at the start can push a snooker break past 147 to a possible 155. It has been done in practice but never in a professional match.'
  },
  {
    id: 'motorways', strip: ['motorway', 'the'], hint: 'Type the motorway, like M1',
    text: 'Name a UK motorway',
    mode: ['M1|1', 'M25|25', 'M6|6'],
    cliche: [],
    mean: ['M4|4', 'M5|5', 'M3|3', 'M40|40', 'M62|62', 'M11|11', 'M20|20', 'M60|60', 'M8|8', 'M42|42'],
    tail: ['M23|23', 'M2|2', 'M18|18', 'M27|27', 'M32|32', 'M50|50', 'M54|54', 'M55|55', 'M56|56', 'M61|61', 'M65|65', 'M69|69', 'M9|9', 'M90|90',
      'M74|74', 'M77|77', 'M80|80', 'M180|180', 'M6 Toll|m6toll'],
    far: ['M26|26', 'M45|45', 'M48|48', 'M49|49', 'M53|53', 'M57|57', 'M58|58', 'M66|66', 'M67|67', 'M73|73', 'M181|181', 'M271|271', 'M275|275',
      'M602|602', 'M606|606', 'M621|621', 'M876|876', 'A1(M)|a1m|a1 m', 'A3(M)|a3m|a3 m'],
    gem: 'M898|898',
    gemNote: 'Scotland\'s shortest motorway, about half a mile long, linking the Erskine Bridge to the M8.'
  },
  {
    id: 'emergency', hint: 'Type the number',
    text: 'Name an emergency phone number used somewhere in the world',
    mode: ['999: UK and Ireland|999', '911: USA and Canada|911'],
    cliche: ['112: Europe, and most mobile phones|112'],
    mean: ['000: Australia|000', '111: New Zealand|111'],
    tail: ['110: police in Germany, Japan and China|110', '119: Japan, South Korea and fire in China|119', '100: police in India|100',
      '108: ambulance in India|108', '120: ambulance in China|120', '117: police in Switzerland|117', '101: fire in India|101'],
    far: ['190: police in Brazil|190', '192: ambulance in Brazil|192', '193: fire in Brazil|193', '997: police in Poland, ambulance in Saudi Arabia|997', '998: fire in Poland|998',
      '122: fire in Austria, police in Egypt|122', '133: police in Austria|133', '144: ambulance in Austria and Switzerland|144', '118: fire in Switzerland, ambulance in Italy|118',
      '113: police in Vietnam and Italy|113', '114: fire in Vietnam|114', '115: ambulance in Vietnam, fire in Italy|115', '17: police in France|17', '18: fire in France|18'],
    gem: '15: ambulance (SAMU) in France|15',
    gemNote: 'France still has separate short numbers: 15 for medical help, 17 for police and 18 for the fire brigade.'
  },
  {
    id: 'apollo', strip: ['apollo', 'mission'], hint: 'Type the mission number',
    text: 'Name a crewed Apollo mission (by its number)',
    mode: ['Apollo 11|11', 'Apollo 13|13'],
    cliche: [],
    mean: ['Apollo 12|12', 'Apollo 8|8'],
    tail: ['Apollo 17|17', 'Apollo 14|14', 'Apollo 10|10', 'Apollo 15|15', 'Apollo 16|16'],
    far: ['Apollo 9|9'],
    gem: 'Apollo 7|7',
    gemNote: 'The first crewed Apollo flight, in October 1968, spent nearly 11 days orbiting Earth.'
  },
  {
    id: 'lucky', hint: 'Type the number',
    text: 'Name a number that is lucky or unlucky somewhere in the world',
    mode: ['7|7', '13|13'],
    cliche: ['666|666'],
    mean: ['8: lucky in China|8', '4: unlucky in East Asia|4', '3|3', '9: unlucky in Japan|9'],
    tail: ['888: very lucky in China|888', '6: lucky in China|6', '39: unlucky in Afghanistan|39', '14: unlucky in China|14'],
    far: ['168: lucky in China|168', '518: lucky in China|518', '49: unlucky in Japan|49', '250: an insult in China|250', '43: unlucky in Japan|43'],
    gem: '17: unlucky in Italy|17',
    gemNote: 'In Roman numerals XVII can be rearranged into VIXI, "I have lived", which is a way of saying "I am dead".'
  }
);

/* Extra answers (November 2026), merged into the lists above so every open question has a wide spread,
   from the obvious to the properly niche. Closed sets (Greek letters, Millennium Problems, Apollo missions,
   Fields medallists) are already complete and are left alone. */
(function () {
  const EXTRA = {
    women: {
      tail: ['Gladys West', 'Annie Easley', 'Christine Darden', 'Evelyn Boyd Granville', 'Cathy O\'Neil', 'Caroline Series', 'Ulrike Tillmann', 'Vicky Neale'],
      far: ['Fan Chung', 'Claire Voisin', 'Sun-Yung Alice Chang', 'Maria Chudnovsky', 'Vera Pless', 'Melba Roy Mouton', 'Lisa Sauermann', 'Theano',
        'Hilda Hudson', 'Bertha Swirles', 'Olga Oleinik', 'Nina Bari', 'Pelageya Kochina', 'Raman Parimala', 'Sylvia Serfaty', 'Laure Saint-Raymond']
    },
    constants: {
      mean: ['Natural log of 2|ln 2|log 2|0.693', 'Zero|0', 'One|1'],
      tail: ['Cube root of 2|∛2|Delian constant', 'Supergolden ratio', 'Bronze ratio', 'Second Feigenbaum constant|Feigenbaum alpha', 'Ramanujan\'s constant|e^(π√163)'],
      far: ['Erdős–Borwein constant|Erdos Borwein', 'Bernstein\'s constant', 'Universal parabolic constant', 'Sierpiński\'s constant|Sierpinski constant',
        'Golomb–Dickman constant|Golomb Dickman', 'Niven\'s constant', 'Backhouse\'s constant', 'Artin\'s constant', 'Viswanath\'s constant',
        'Fransén–Robinson constant|Fransen Robinson', 'Kepler–Bouwkamp constant|Kepler Bouwkamp', 'Somos\' quadratic recurrence constant|Somos',
        'Ramanujan–Soldner constant|Soldner']
    },
    branches: {
      tail: ['Mathematical physics', 'Financial mathematics', 'Mathematical biology|biomathematics'],
      far: ['Actuarial science', 'Control theory', 'Coding theory', 'Additive combinatorics', 'Analytic number theory', 'Geometric group theory',
        'Low-dimensional topology']
    },
    polyhedra: {
      tail: ['Pentagonal bipyramid', 'Heptagonal prism', 'Pentagonal trapezohedron|d10'],
      far: ['Snub disphenoid', 'Triakis tetrahedron', 'Compound of five tetrahedra', 'Jessen\'s icosahedron|Jessen', 'Dürer\'s solid|Durer solid',
        'Gyrobifastigium', 'Pentagonal rotunda', 'Square cupola', 'Tetrahemihexahedron', 'Pyritohedron']
    },
    distributions: {
      tail: ['Multivariate normal|bivariate normal', 'Categorical', 'Power law'],
      far: ['Arcsine', 'Generalised extreme value|GEV|generalized extreme value', 'Fréchet|Frechet', 'Burr', 'Inverse Gaussian|Wald', 'Nakagami',
        'Rice|Rician', 'Yule–Simon|Yule Simon', 'Borel', 'Irwin–Hall|Irwin Hall', 'Logarithmic|log-series', 'Gompertz', 'Noncentral chi-squared',
        'Marchenko–Pastur|Marchenko Pastur', 'Poisson binomial', 'Half-normal|half normal', 'Truncated normal', 'Bose–Einstein|Bose Einstein',
        'Fermi–Dirac|Fermi Dirac']
    },
    unsolved: {
      tail: ['abc conjecture|abc', 'Beal conjecture|Beal', 'Infinitely many Mersenne primes|Mersenne primes', 'Polignac\'s conjecture|Polignac',
        'Is e + π irrational|e plus pi'],
      far: ['Kissing number problem|kissing number', 'Erdős–Gyárfás conjecture|Erdos Gyarfas', 'Graceful tree conjecture|graceful labelling',
        'Hadamard conjecture|Hadamard matrices', 'Singmaster\'s conjecture|Singmaster', 'Is the Euler–Mascheroni constant irrational|gamma irrational',
        'Andrica\'s conjecture|Andrica', 'Oppermann\'s conjecture|Oppermann', 'Cramér\'s conjecture|Cramer', 'Are there more Fermat primes|Fermat primes',
        'Bunyakovsky conjecture|Bunyakovsky', 'Hilbert\'s sixteenth problem|Hilbert 16th', 'Invariant subspace problem', 'Reconstruction conjecture',
        'Hadwiger conjecture', 'Sendov\'s conjecture|Sendov', 'Magic square of squares', 'Erdős conjecture on arithmetic progressions|Erdos arithmetic progressions']
    },
    polygons: {
      tail: ['Isosceles trapezium|isosceles trapezoid', 'Golden rectangle'],
      far: ['Cyclic quadrilateral', 'Tetracontagon', 'Pentacontagon', 'Googolgon']
    },
    sequences: {
      far: ['Tetranacci', 'Narayana\'s cows|Narayana', 'Juggler sequence|juggler', 'Aliquot sequence|aliquot', 'Van Eck\'s sequence|Van Eck', 'EKG sequence|EKG',
        'Gijswijt\'s sequence|Gijswijt', 'Twin primes', 'Lucky numbers', 'Sophie Germain primes', 'Star numbers', 'Centred hexagonal numbers|hex numbers',
        'Pronic numbers|oblong numbers', 'Taxicab numbers|taxicab', 'Repunits|repunit']
    },
    fractals: {
      tail: ['Sierpiński pyramid|Sierpinski tetrahedron|Sierpinski pyramid', 'Fractal tree|binary tree', 'Lightning|Lichtenberg figure', 'Coastline of Britain|coastline'],
      far: ['Cantor dust', 'Moore curve|Moore', 'Sierpiński curve|Sierpinski curve', 'Sierpiński arrowhead|Sierpinski arrowhead', 'Hexaflake', 'Pentaflake',
        'Jerusalem cube', 'Mosely snowflake', 'Fibonacci word fractal', 'Rössler attractor|Rossler', 'Logistic map|bifurcation diagram|Feigenbaum tree',
        'Buddhabrot', 'Tricorn|Mandelbar', 'Douady rabbit', 'H-tree|H fractal', 'Brownian motion']
    },
    paradoxes: {
      tail: ['Ship of Theseus|Theseus', 'Three prisoners', 'Missing dollar|missing dollar riddle', 'Bertrand\'s chord paradox|Bertrand chord'],
      far: ['Interesting number paradox|interesting number', 'Card paradox|Jourdain', 'Yablo\'s|Yablo', 'Crocodile dilemma|crocodile', 'Omnipotence paradox|omnipotence',
        'Elevator paradox|elevator', 'Inspection paradox|waiting time', 'Thomson\'s lamp|Thomson', 'Ross–Littlewood|vase|Ross Littlewood',
        'Smale\'s paradox|sphere eversion', 'Lottery paradox|lottery', 'Preface paradox|preface', 'Paradox of the court|Protagoras', 'Will Rogers phenomenon|Will Rogers']
    },
    numbertypes: {
      mean: ['Positive'],
      far: ['Pentagonal', 'Regular numbers|Hamming numbers|5-smooth', 'Practical', 'Pandigital']
    },
    proofs: {
      tail: ['Proof by symmetry|symmetry', 'Geometric proof|dissection|rearrangement', 'Coordinate proof|coordinate geometry|analytic proof', 'Vector proof|vectors',
        'Inclusion–exclusion|inclusion exclusion', 'Generating functions', 'Epsilon-delta|epsilon delta'],
      far: ['Discharging method|discharging', 'Polynomial method', 'Linear algebra method', 'Fixed-point argument|fixed point', 'Monovariant',
        'Minimal counterexample|smallest counterexample|minimal criminal', 'Burnside\'s lemma|Burnside']
    },
    puzzles: {
      tail: ['KenKen', 'Nonogram|Picross|griddler', 'Minesweeper', 'Countdown numbers game|Countdown', '24 game|make 24', 'Peg solitaire', 'Cross-number|crossnumber',
        'Knights and knaves', 'Squaring the circle'],
      far: ['Futoshiki', 'Slitherlink', 'Nurikabe', 'Hardest logic puzzle ever|three gods', 'Lion and man|lion and christian', 'Problem of Apollonius|Apollonius',
        'Ant on a rubber rope|rubber rope', 'Brachistochrone', 'Buffon\'s needle|Buffon', 'Basel problem|Basel', 'Doubling the cube', 'Angle trisection|trisecting an angle']
    },
    calculus: {
      mean: ['Sum rule'],
      tail: ['Constant multiple rule', 'Reverse chain rule|integration by inspection|inspection', 'Small angle approximation|small angle',
        'Volumes of revolution|volume of revolution', 'Inverse function rule', 'Partial differentiation|partial derivatives', 'Riemann sums|Riemann sum',
        'Intermediate value theorem', 'Trigonometric substitution|trig substitution', 'Ratio test'],
      far: ['Hyperbolic substitution', 'Euler–Lagrange equation|calculus of variations|Euler Lagrange', 'Divergence theorem|Gauss\'s theorem', 'Fourier series',
        'Euler–Maclaurin formula|Euler Maclaurin', 'Fubini\'s theorem|Fubini', 'Dominated convergence theorem|dominated convergence', 'Cauchy\'s integral formula',
        'Shell method|disc method|washer method', 'Comparison test', 'Integral test']
    },
    games: {
      tail: ['Connect Four|connect 4', 'Draughts|checkers', 'Dots and boxes', 'Cake cutting|I cut you choose|fair division', 'Coordination game|coordination',
        'Vickrey auction|second-price auction|auction'],
      far: ['Othello|Reversi', 'Oware|Awari', 'Wythoff\'s game|Wythoff', 'Domineering', 'Kayles', 'Sylver coinage', 'Sim', 'Penney\'s game|Penney',
        'Nash demand game', 'Minority game', 'Inspection game', 'Truel|duel', 'Divide the dollar', 'All-pay auction']
    },
    triangles: {
      tail: ['Oblique', 'Floyd\'s triangle|Floyd'],
      far: ['Golden gnomon', 'Ideal triangle', 'Automedian', 'Bell triangle', 'Leibniz harmonic triangle|harmonic triangle', 'Cevian triangle|cevian',
        'Anticomplementary triangle|anticomplementary', 'Tangential triangle|tangential']
    },
    popnumbers: {
      mean: ['88: miles per hour in Back to the Future|88', '64: When I\'m Sixty-Four|64', '4: the Fantastic Four|4', '21: 21 Jump Street, and Adele\'s album|21'],
      tail: ['73: Sheldon Cooper\'s favourite number|73', '1.21: gigawatts in Back to the Future|1.21', '1917: the Sam Mendes film|1917', '1999: the Prince song|1999',
        '2012: the disaster film|2012', '2049: Blade Runner 2049|2049', '1989: Taylor Swift\'s album|1989', '50: 50 First Dates|50', '16: Sixteen Candles|16',
        '19: Adele\'s first album|19', '25: Adele\'s third album|25']
    },
    sportnumbers: {
      mean: ['90: minutes in a football match|90', '60: treble 20 in darts|60', '12: the twelfth man|12', '21: points to win a game of badminton|21'],
      tail: ['80: minutes in a rugby match|80', '38: games in a Premier League season|38', '32: teams in the NFL|32', '48: teams at the 2026 World Cup|48',
        '1500: metres in the "metric mile"|1500', '44: Lewis Hamilton\'s car number|44', '46: Valentino Rossi\'s bike number|46', '59: a round of 59 in golf|59'],
      far: ['99.94: Don Bradman\'s Test batting average|99.94', '49: Rocky Marciano\'s unbeaten 49-0 record|49', '162: games in an MLB regular season|162',
        '82: games in an NBA regular season|82', '2.45: Javier Sotomayor\'s high jump record, in metres|2.45', '8.95: Mike Powell\'s long jump record, in metres|8.95',
        '10000: metres in the longest track race|10000|10,000']
    },
    emergency: {
      tail: ['102: ambulance in India|102', '995: ambulance in Singapore|995'],
      far: ['10111: police in South Africa|10111', '10177: ambulance in South Africa|10177', '1669: ambulance in Thailand|1669', '191: police in Thailand|191',
        '199: fire in Thailand|199', '123: ambulance in Egypt, and the emergency number in Colombia|123', '1122: rescue in Pakistan|1122',
        '131: ambulance in Chile|131', '132: fire in Chile|132',
        '106: text relay for deaf callers in Australia|106', '03: ambulance in Russia|03|103', '02: police in Russia|02', '01: fire in Russia|01']
    },
    lucky: {
      mean: ['2: lucky in China, as good things come in pairs|2', '18: lucky in Judaism, as it spells "chai", life|18', '99: lucky in China, for "long-lasting"|99'],
      tail: ['111: Nelson, unlucky in English cricket|111', '87: unlucky in Australian cricket, 13 short of 100|87', '108: sacred in Hinduism and Buddhism|108',
        '42: unlucky in Japan, sounds like "to death"|42', '520: means "I love you" in Chinese|520'],
      far: ['222: double Nelson in cricket|222', '786: lucky for many Muslims in South Asia|786', '1314: means "for a lifetime" in Chinese|1314',
        '44: doubly unlucky in East Asia|44', '74: unlucky in China|74']
    }
  };
  const byId = new Map(window.OUTLIER_LISTS.map(q => [q.id, q]));
  for (const [id, tiers] of Object.entries(EXTRA)) {
    const q = byId.get(id); if (!q) continue;
    for (const [tier, items] of Object.entries(tiers)) q[tier] = (q[tier] || []).concat(items);
  }
})();

/* Number prompts. Each builds its set of valid answers (as decimal strings, smallest first).
   Rarity comes from where the number sits in the set and how "memorable" it is
   (round, palindromic, repeated digits or famous numbers count as more common). */
window.OUTLIER_NUMBER_TEMPLATES = [
  { id: 'prime1000', make: () => ({ text: 'Name a prime number less than 1000', set: primesBetween(2, 999), cliche: ['997', '73'] }) },
  { id: 'primeband', make: r => { const a = 100 * (1 + Math.floor(r() * 9)); return { text: `Name a prime number between ${a} and ${a + 100}`, set: primesBetween(a, a + 100) }; } },
  { id: 'squares', make: () => ({ text: 'Name a square number between 100 and 10,000', set: range(11, 100).map(n => String(n * n)), cliche: ['144', '10000'] }) },
  { id: 'cubes', make: () => ({ text: 'Name a cube number less than one million', set: range(1, 99).map(n => String(n ** 3)), cliche: ['1000', '1728'] }) },
  { id: 'fib', make: () => ({ text: 'Name a Fibonacci number bigger than 100', set: fibBetween(101, 1e15), cliche: ['144'] }) },
  { id: 'tri', make: () => ({ text: 'Name a triangular number between 100 and 10,000', set: range(1, 200).map(n => n * (n + 1) / 2).filter(t => t > 100 && t < 10000).map(String), cliche: ['5050'] }) },
  { id: 'pow2', make: () => ({ text: 'Name a power of 2 that is bigger than 100', set: range(7, 64).map(k => (2n ** BigInt(k)).toString()), cliche: ['1024', '65536'] }) },
  { id: 'three', make: () => ({ text: 'Name a number under 10,000 with exactly three factors', set: primesBetween(2, 99).map(p => String(+p * +p)), cliche: ['9'] }) },
  { id: 'factors', make: r => { const N = [360, 720, 840, 1260, 5040][Math.floor(r() * 5)]; return { text: `Name a factor of ${N.toLocaleString('en-GB')} (other than 1 and ${N.toLocaleString('en-GB')})`, set: range(2, N - 1).filter(d => N % d === 0).map(String) }; } },
  { id: 'multiples', make: r => { const k = [7, 11, 13, 17, 19, 23][Math.floor(r() * 6)]; return { text: `Name a three-digit multiple of ${k}`, set: range(100, 999).filter(n => n % k === 0).map(String) }; } },
  { id: 'palprime', make: () => ({ text: 'Name a prime that reads the same backwards (bigger than 11)', set: primesBetween(12, 99999).filter(p => p === [...p].reverse().join('')), cliche: ['101'] }) },
  { id: 'digitsum', make: r => { const s = [10, 12, 15, 18, 20][Math.floor(r() * 5)]; return { text: `Name a number less than 1000 whose digits add up to ${s}`, set: range(1, 999).filter(n => [...String(n)].reduce((a, d) => a + +d, 0) === s).map(String) }; } },
  { id: 'abundant', make: () => ({ text: 'Name an abundant number under 200 (its proper factors add up to more than it)', set: range(2, 199).filter(n => range(1, n - 1).filter(d => n % d === 0).reduce((a, b) => a + b, 0) > n).map(String), cliche: ['12'] }) },
  { id: 'semiprime', make: () => ({ text: 'Name a two-digit number that is the product of exactly two primes', set: range(10, 99).filter(isSemiprime).map(String) }) },
  { id: 'mersenne', make: () => ({ text: 'Name a Mersenne prime (a prime that is one less than a power of 2)', set: [2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127].map(p => (2n ** BigInt(p) - 1n).toString()), cliche: ['2147483647'] }) },
  { id: 'perfect', make: () => ({ text: 'Name a perfect number', set: ['6', '28', '496', '8128', '33550336', '8589869056', '137438691328', '2305843008139952128'] }) },
  { id: 'eight', make: () => ({ text: 'Name a number under 1000 with exactly eight factors', set: range(1, 999).filter(n => range(1, n).filter(d => n % d === 0).length === 8).map(String) }) },
  { id: 'primeyear', make: () => ({ text: 'Name a year between 1900 and 2100 that is a prime number', set: primesBetween(1900, 2100), cliche: ['2027', '1999'] }) },
  { id: 'roulette', make: () => ({ text: 'Name a number on a European roulette wheel', set: range(0, 36).map(String), cliche: ['17'] }) },
  { id: 'darts', make: () => ({ text: 'Name a score you can get with a single dart', set: [...new Set(range(1, 20).flatMap(n => [n, 2 * n, 3 * n]).concat([25, 50]))].sort((a, b) => a - b).map(String), cliche: ['60', '50'] }) },
  { id: 'leap', make: () => ({ text: 'Name a leap year between 1900 and 2100', set: range(1901, 2099).filter(y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0).map(String), cliche: ['2000'] }) }
];

function range(a, b) { const out = []; for (let i = a; i <= b; i++) out.push(i); return out; }
function primesBetween(a, b) {
  const sieve = new Uint8Array(b + 1); const out = [];
  for (let i = 2; i <= b; i++) { if (!sieve[i]) { if (i >= a) out.push(String(i)); for (let j = i * i; j <= b; j += i) sieve[j] = 1; } }
  return out;
}
function fibBetween(lo, hi) { const out = []; let x = 1, y = 1; while (y <= hi) { if (y >= lo) out.push(String(y)); [x, y] = [y, x + y]; } return out; }
function isSemiprime(n) { let c = 0, m = n; for (let p = 2; p * p <= m; p++) while (m % p === 0) { m /= p; c++; } if (m > 1) c++; return c === 2; }
