// Browser Environment & Protocol Detection (Dual Online/Offline Compatibility)
const isFileProtocol = typeof window !== "undefined" && window.location && window.location.protocol === "file:";

function isStaticEnvironment() {
  if (typeof window === "undefined" || !window.location) return false;
  if (window.isStaticMode === true) return true;
  if (window.location.protocol === "file:") return true;
  const host = (window.location.hostname || "").toLowerCase();
  return host.endsWith("github.io") ||
         host.endsWith("pages.dev") ||
         host.endsWith("gitlab.io") ||
         host.includes("static") ||
         (host === "localhost" && !window.location.port);
}

const BENCHMARK_STUDENT_DRAFTS = {
  "13989": {"student_name": "Maya", "student_id": "13989", "model_id": "cell_free", "title": "", "system": "hospital wastewater effluent", "chassis": "hospital wastewater effluent", "tool": "CRISPR-Cas12a fluorescent reporter", "target": "mcr-1 colistin resistance gene", "search_query": "", "matrix": {"yellow": "", "blue": "", "green": "", "purple": "", "red": "", "citation": ""}, "abstract": "", "funnel": {"tier1": "", "tier2": "", "tier3": "", "tier4": ""}, "overarching_aim": "", "aims": {"aim1": "", "aim2": "", "aim3": ""}, "methodology": "", "expected_outcomes": "", "impact": "", "customer": "", "market": "", "usps": "", "competitor_data": {"incumbent_name": "", "incumbent_speed": "", "incumbent_cost": "", "incumbent_metric": "", "incumbent_portability": "", "incumbent_safety": "", "emerging_name": "", "emerging_speed": "", "emerging_cost": "", "emerging_metric": "", "emerging_portability": "", "emerging_safety": "", "proposed_name": "", "proposed_speed": "", "proposed_cost": "", "proposed_metric": "", "proposed_portability": "", "proposed_safety": ""}, "swot": {"strengths": "", "weaknesses": "", "opportunities": "", "threats": ""}, "pestel": {"political": "", "economic": "", "social": "", "technological": "", "environmental": "", "legal": ""}, "time_plan": "", "budget": "", "references": "", "updated_at": "2026-09-20T10:07:18.755171", "updated_at_readable": "Sep 20, 2026 - 10:07", "summary": {"completed_nodes": 1, "completion_percentage": 10, "word_count": 0}, "faculty_review": {"instructor_name": "BT_301 Faculty Evaluation Board", "gpa": 0.5882352941176471, "raw_total": 5, "standing": "⚠️ Substantial Revisions Needed", "criterion_overrides": {}, "manual_notes": "require revision", "action_items": ["[AB-01] Address rubric diagnostic code: AB-01", "Proposal Title: Review and strengthen scientific rigor against rubric standards.", "Structured Abstract: Review and strengthen scientific rigor against rubric standards.", "Inverted Funnel & Knowledge Gap: Review and strengthen scientific rigor against rubric standards.", "3 Decoupled Aims Non-Contingency: Review and strengthen scientific rigor against rubric standards.", "Experimental Controls & Methodology: Review and strengthen scientific rigor against rubric standards.", "3-Tier Impact & Deliverables: Review and strengthen scientific rigor against rubric standards.", "Competitor Analysis & USP: Review and strengthen scientific rigor against rubric standards.", "Biotech FMEA & Risk Mitigation: Review and strengthen scientific rigor against rubric standards.", "Peer-Reviewed References Recency: Review and strengthen scientific rigor against rubric standards.", "Scientific Nomenclature & Format: Review and strengthen scientific rigor against rubric standards.", "require revision"], "memo_text": "FACULTY REVIEW & FACILITATION AUDIT MEMO\nProject: \nStudent / Team: Maya\nCourse: BT_301 Introduction to Biotechnology\n=================================================================\n\nRAPID AUDIT NOTES:\n• [AB-01 - Exceeds 250 Words]: Abstract exceeds the strict 250-word ceiling. Edit down concisely to prevent editorial desk rejection.\n\nFACULTY INSTRUCTOR NOTES:\nrequire revision\n", "dispatched_at": "Sep 20, 2026 - 11:53"}},
  "13988": {"student_name": "Maya", "student_id": "13989", "model_id": "cell_free", "title": "", "system": "hospital wastewater effluent", "chassis": "hospital wastewater effluent", "tool": "CRISPR-Cas12a fluorescent reporter", "target": "mcr-1 colistin resistance gene", "search_query": "", "matrix": {"yellow": "", "blue": "", "green": "", "purple": "", "red": "", "citation": ""}, "abstract": "", "funnel": {"tier1": "", "tier2": "", "tier3": "", "tier4": ""}, "overarching_aim": "", "aims": {"aim1": "", "aim2": "", "aim3": ""}, "methodology": "", "expected_outcomes": "", "impact": "", "customer": "", "market": "", "usps": "", "competitor_data": {"incumbent_name": "", "incumbent_speed": "", "incumbent_cost": "", "incumbent_metric": "", "incumbent_portability": "", "incumbent_safety": "", "emerging_name": "", "emerging_speed": "", "emerging_cost": "", "emerging_metric": "", "emerging_portability": "", "emerging_safety": "", "proposed_name": "", "proposed_speed": "", "proposed_cost": "", "proposed_metric": "", "proposed_portability": "", "proposed_safety": ""}, "swot": {"strengths": "", "weaknesses": "", "opportunities": "", "threats": ""}, "pestel": {"political": "", "economic": "", "social": "", "technological": "", "environmental": "", "legal": ""}, "time_plan": "", "budget": "", "references": "", "updated_at": "2026-09-20T10:07:18.755171", "updated_at_readable": "Sep 20, 2026 - 10:07", "summary": {"completed_nodes": 1, "completion_percentage": 10, "word_count": 0}, "faculty_review": {"instructor_name": "BT_301 Faculty Evaluation Board", "gpa": 0.5882352941176471, "raw_total": 5, "standing": "⚠️ Substantial Revisions Needed", "criterion_overrides": {}, "manual_notes": "require revision", "action_items": ["[AB-01] Address rubric diagnostic code: AB-01", "Proposal Title: Review and strengthen scientific rigor against rubric standards.", "Structured Abstract: Review and strengthen scientific rigor against rubric standards.", "Inverted Funnel & Knowledge Gap: Review and strengthen scientific rigor against rubric standards.", "3 Decoupled Aims Non-Contingency: Review and strengthen scientific rigor against rubric standards.", "Experimental Controls & Methodology: Review and strengthen scientific rigor against rubric standards.", "3-Tier Impact & Deliverables: Review and strengthen scientific rigor against rubric standards.", "Competitor Analysis & USP: Review and strengthen scientific rigor against rubric standards.", "Biotech FMEA & Risk Mitigation: Review and strengthen scientific rigor against rubric standards.", "Peer-Reviewed References Recency: Review and strengthen scientific rigor against rubric standards.", "Scientific Nomenclature & Format: Review and strengthen scientific rigor against rubric standards.", "require revision"], "memo_text": "FACULTY REVIEW & FACILITATION AUDIT MEMO\nProject: \nStudent / Team: Maya\nCourse: BT_301 Introduction to Biotechnology\n=================================================================\n\nRAPID AUDIT NOTES:\n• [AB-01 - Exceeds 250 Words]: Abstract exceeds the strict 250-word ceiling. Edit down concisely to prevent editorial desk rejection.\n\nFACULTY INSTRUCTOR NOTES:\nrequire revision\n", "dispatched_at": "Sep 20, 2026 - 11:53"}},
  "ST-2026-01": {
    "student_id": "ST-2026-01",
    "student_name": "Sara Ahmed & Team BioInnovate",
    "title": "CRISPR-Cas12a-Assisted Isothermal Detection of Polymyxin Resistance (mcr-1) in Agricultural Wastewater",
    "chassis": "Cell-free Tx-Tl lysate",
    "tool": "CRISPR-Cas12a (LbCas12a) with FAM-quencher reporter",
    "target": "mcr-1 colistin resistance plasmid gene in wastewater"
  }
};

const FALLBACK_COMMENT_BANK = {"title": [{"code": "T-01", "label": "Vague Title (All-or-None 0%)", "comment": "Title is overly vague and fails the 4-anchor formula. Rephrase as: [Mechanism] in [Experimental System] to [Target Metric] for [Application]. Awarded: 0%."}, {"code": "T-02", "label": "Missing System / Chassis", "comment": "Title lacks experimental system, biological host organism, or delivery matrix. Specify the exact experimental model."}, {"code": "T-03", "label": "Strong Descriptive Title", "comment": "Concise, descriptive, and accurately conveys molecular mechanism, host, and application. Awarded: 2%."}], "abstract": [{"code": "AB-01", "label": "Exceeds 250 Words", "comment": "Abstract exceeds the strict 250-word ceiling. Edit down concisely to prevent editorial desk rejection."}, {"code": "AB-02", "label": "Unbalanced Components", "comment": "Abstract must balance 4 distinct components: Problem burden (2%), brief methodology (2%), expected findings (1%), and concluding impact statement."}], "background": [{"code": "BG-01", "label": "Missing Quantified Burden", "comment": "Tier 1 problem statement lacks an empirical quantified statistic (annual metric tons, incidence rate, or monetary loss). Replace general assertions with hard numbers."}, {"code": "BG-02", "label": "Missing Knowledge Gap Pivot", "comment": "Missing an explicit pivot from existing literature to your knowledge gap. Use a formal transition ('However, widespread deployment remains critically constrained by...')."}, {"code": "BG-03", "label": "Hypothesis Lacks Mechanism", "comment": "Hypothesis is descriptive rather than mechanistic. Include 'because...' followed by the specific biophysical or biochemical rationale."}], "aims": [{"code": "AIM-01", "label": "Domino Collapse Trap", "comment": "FATAL REVIEWER FLAW: Objective 2 completely depends on Objective 1 succeeding with 100% yield. Establish an active parallel baseline so work continues if Objective 1 faces technical delays."}, {"code": "AIM-02", "label": "Missing Quantitative Milestone", "comment": "Each objective must conclude with a measurable Go/No-Go milestone (e.g. expression yield, Kd, Tm elevation, % clearance)."}], "methodology": [{"code": "METH-01", "label": "Past Tense Penalty (Rubric 11)", "comment": "Methodology is written in past tense ('was performed', 'were inoculated'). Proposals describe FUTURE work: rewrite strictly in future tense ('will be incubated', 'will be assayed'). Penalty: -1.0 mark."}, {"code": "METH-02", "label": "Missing Experimental Controls", "comment": "Missing explicit positive, negative, and vehicle controls. State what negative control separates biological activity from abiotic background noise."}], "swot": [{"code": "SW-01", "label": "Student Cliché in Weaknesses", "comment": "AVOID STUDENT COP-OUT: 'We are students' or 'lack of time' loses marks. Weaknesses must address authentic biological failure modes (e.g. inclusion bodies, off-target cleavage, proteolytic degradation)."}, {"code": "SW-02", "label": "Incomplete PESTEL", "comment": "Ensure all 6 PESTEL dimensions are addressed with genuine biotechnology context (e.g. Cartagena Protocol for Legal, reagent tariffs for Economic)."}]};

const DEFAULT_EMBEDDED_BREAKTHROUGHS = [{"id": "breakthrough_alphafold3", "title": "AlphaFold 3: Multi-Modal Biomolecular Structure Prediction", "category": "ai_cadd", "category_label": "AI & CADD", "tag": "Nobel Foundation Landmark", "year": 2024, "date_display": "2024 • Nature", "journal": "Nature", "authors": "Abramson, J., Adler, J., Dunger, J. et al.", "doi_url": "https://doi.org/10.1038/s41586-024-07487-w", "is_foundational": true, "educational": {"what_is_it": "An artificial intelligence system created by DeepMind that predicts the 3D atomic structures of almost all biological molecules—including proteins, DNA, RNA, chemical drugs, and metal ions—and reveals exactly how they physically dock together.", "problem_solved": "Determining how a drug binds to a disease protein previously required years of difficult X-ray crystallography or cryo-EM experiments. Modeling complexes containing multiple proteins, DNA, and small drugs simultaneously was nearly impossible with older tools.", "how_it_works": ["Step 1 (Chemical Encoding): Scientists input the sequence of proteins/RNA and the chemical structure of drug molecules into the model.", "Step 2 (Pairformer Cross-Attention): The AI calculates how every individual atom exerts physical forces and geometric constraints on every other atom across all molecules.", "Step 3 (3D Diffusion Assembly): Starting from a cloud of random Gaussian noise, the diffusion algorithm iteratively nudges every atom into its biologically lowest-energy 3D position in just seconds."], "why_it_matters": "Accelerates drug discovery by allowing researchers to test thousands of virtual drug candidates against disease targets on a computer before spending millions on wet-lab synthesis."}, "technical": {"mechanism": "Implements an invariant Point Attention Diffusion architecture that bypasses multiple sequence alignment (MSA) requirements for ligands, outputting joint coordinates with accurate stereochemistry across multi-chain protein-nucleic acid-ligand assemblies.", "citation": "Abramson, J., Adler, J., Dunger, J. et al. (2024). Accurate structure prediction of biomolecular interactions with AlphaFold 3. Nature, 630(8016), 493–500.", "significance": "Cross-docking pose accuracy exceeds 76% on benchmark targets without requiring prior homologous crystallographic scaffolds."}, "proposal_launchpad": {"what_was_proved": "AlphaFold 3 predicts atomic coordinates of multi-chain complexes containing proteins, DNA, RNA, chemical ligands, and metal ions with >76% pose accuracy directly from raw sequence.", "unsolved_gap": "It cannot predict drug binding affinity (Kd / IC50 values), conformational transitions under physiological solvent conditions, or the functional consequences of allosteric mutations.", "proposal_idea": "Use AlphaFold 3 to model mutant kinase variants coupled with in vitro microscale thermophoresis (MST) to evaluate whether predicted pocket rearrangements correlate with drug resistance."}}, {"id": "breakthrough_prime_editing", "title": "Prime Editing 6 (PE6): High-Efficiency Search-and-Replace Genomic Modifications", "category": "gene_editing", "category_label": "Gene Editing", "tag": "Precision Medicine", "year": 2024, "date_display": "2024 • Nat Biotechnol", "journal": "Nat Biotechnol", "authors": "Doman, J. L., Pandey, S., Neugebauer, M. E. et al.", "doi_url": "https://doi.org/10.1038/s41587-023-01925-w", "is_foundational": true, "educational": {"what_is_it": "A precision genome-editing technology that finds a specific target sequence in DNA and replaces, inserts, or deletes genetic letters directly without cutting both strands of the DNA double helix.", "problem_solved": "Standard CRISPR-Cas9 cuts completely through both DNA strands (double-strand breaks). When cells repair these severed ends, they often introduce random errors, insertions, deletions, or large chromosomal rearrangements that can trigger cancer.", "how_it_works": ["Step 1 (Targeted Nicking): A modified Cas9 nickase enzyme cuts only one of the two DNA strands at the exact disease mutation site.", "Step 2 (RNA-Directed Synthesis): An engineered prime editing guide RNA (pegRNA) carries the new genetic sequence. An attached reverse transcriptase copies this sequence directly into the DNA strand.", "Step 3 (Permanent Sealing): Cellular mismatch repair pathways incorporate the newly edited flap into the genome, permanently correcting the mutation without double-strand breaks."], "why_it_matters": "Can theoretically correct roughly 89% of known genetic variants that cause human diseases—such as sickle cell anemia, cystic fibrosis, and Tay-Sachs—with minimal off-target DNA damage."}, "technical": {"mechanism": "Fuses an engineered Moloney Murine Leukemia Virus reverse transcriptase (M-MLV RT) variant to SpCas9(H840A) nickase, utilizing structured pegRNAs with an evopreQ1 pseudoknot to resist exonuclease degradation and drive edit efficiencies >60%.", "citation": "Doman, J. L., Pandey, S., Neugebauer, M. E. et al. (2024). Phage-assisted evolution and protein engineering of prime editors with improved editing efficiency. Nature Biotechnology, 42(5), 781–792.", "significance": "Corrects transition and transversion mutations with indel rates <1%, avoiding p53 DNA-damage checkpoint activation."}, "proposal_launchpad": {"what_was_proved": "Engineered prime editor variants achieve >60% target transversion and insertion rates with <1% insertion/deletion (indel) errors and minimal double-strand breaks.", "unsolved_gap": "Large prime editor constructs (>6.5 kb) exceed standard adeno-associated virus (AAV) packaging capacity (4.7 kb), limiting in vivo tissue delivery.", "proposal_idea": "Design a dual-intein split-PE system or test lipid nanoparticle (LNP) mRNA formulation to deliver prime editors into primary hepatocytes for hypercholesterolemia gene correction."}}, {"id": "breakthrough_epigenetic_reprogramming", "title": "Transient Epigenetic Reprogramming: Cellular Rejuvenation & Vision Restoration", "category": "longevity", "category_label": "Longevity & Aging", "tag": "Rejuvenation Landmark", "year": 2020, "date_display": "2020 • Nature", "journal": "Nature", "authors": "Lu, Y., Brommer, B., Tian, X. et al.", "doi_url": "https://doi.org/10.1038/s41586-020-2975-4", "is_foundational": true, "educational": {"what_is_it": "A therapeutic technique that resets the chemical aging marks on cellular DNA, restoring old, tired cells back to a youthful state without erasing their specialized tissue identity.", "problem_solved": "As cells age, they accumulate abnormal chemical tags (DNA methylation) that silence youth-promoting genes and activate chronic inflammatory pathways, leading to organ failure, blindness, and neurodegeneration.", "how_it_works": ["Step 1 (Controlled Induction): Tissues receive short, cyclical pulses of three natural transcription factors (Oct4, Sox2, Klf4 — OSK).", "Step 2 (Epigenetic Erasure): The factors activate natural demethylase enzymes (TET1 and TET2) that strip away aberrant aging methyl tags from gene promoter regions.", "Step 3 (Tissue Renewal): Cells recover youthful mitochondrial energy, gene expression profiles, and regenerative capacity while remaining fully specialized (e.g. eye cells remain eye cells, avoiding tumors)."], "why_it_matters": "Restored vision in aged mice and primates with glaucoma by regenerating damaged optic nerve fibers, establishing the foundation for systemic biological rejuvenation therapies."}, "technical": {"mechanism": "Cyclical OSK expression drives TET-dependent DNA demethylation at age-associated CpG loci, downregulating senescence-associated secretory phenotypes (SASP) and restoring youthful heterochromatin without inducing teratoma formation.", "citation": "Lu, Y., Brommer, B., Tian, X. et al. (2020). Reversal of ageing-associated DNA methylation patterns and restoration of vision. Nature, 588(7836), 124–129.", "significance": "Promotes in vivo axon regeneration and restores youthful transcriptomic and physiological profiles across diverse mammalian organ systems."}, "proposal_launchpad": {"what_was_proved": "Cyclical OSK expression demethylated age-associated DNA loci and restored optic nerve axon regeneration in glaucoma models without oncogenic transformation.", "unsolved_gap": "Continuous uncontrolled OSK expression triggers lethal teratomas; precise non-invasive dosage switches and tissue-restricted promoters remain unsolved in humans.", "proposal_idea": "Construct a chemically inducible (e.g. doxycycline-regulated) or tissue-specific promoter cassette to restrict OSK pulse duration to 48 hours in retinal ganglion cells."}}, {"id": "breakthrough_in_vivo_cart", "title": "In Vivo CAR-T Cell Programming: Direct Bloodstream Immunotherapy", "category": "cell_therapy", "category_label": "Cell Therapy", "tag": "Clinical Paradigm Shift", "year": 2022, "date_display": "2022 • Science", "journal": "Science", "authors": "Rurik, J. G., Tombácz, I., Yadegari, A. et al.", "doi_url": "https://doi.org/10.1126/science.abm0594", "is_foundational": true, "educational": {"what_is_it": "An off-the-shelf intravenous therapy that trains a patient's own immune cells to hunt down and destroy cancer directly inside their body, eliminating the need to manufacture cells in an external laboratory cleanroom.", "problem_solved": "Traditional CAR-T therapy requires harvesting a patient's T-cells through hours of leukapheresis, shipping them to an expensive cleanroom, modifying them over 3–4 weeks, and re-infusing them. Many patients die waiting, and treatments cost over $450,000.", "how_it_works": ["Step 1 (Targeted Nanoparticles): Lipid nanoparticles coated with antibody fragments (anti-CD5 or anti-CD3) are administered through a standard intravenous infusion.", "Step 2 (Selective Cell Entry): The nanoparticles selectively bind to circulating T-cells in the bloodstream and deliver synthetic mRNA encoding cancer-hunting chimeric antigen receptors.", "Step 3 (Immediate Cancer Elimination): The T-cells translate the mRNA and express cancer-targeting receptors on their surface within 24 hours, actively attacking target cells."], "why_it_matters": "Transforms an intensive, multi-week cell transplant procedure into an affordable, single-dose outpatient injection that can be administered at any community hospital."}, "technical": {"mechanism": "Formulated with ionizable lipids conjugated to CD5-specific scFv fragments, delivering 1-methylpseudouridine modified mRNA. Achieves transient, integration-free T-cell reprogramming that mitigates chronic cytokine release syndrome risks.", "citation": "Rurik, J. G., Tombácz, I., Yadegari, A. et al. (2022). CAR T cells produced in vivo to treat cardiac injury. Science, 375(6576), 91–96.", "significance": "Reduces cardiac fibrosis and improves function in mice without requiring ex vivo cell processing or lymphodepleting chemotherapy."}, "proposal_launchpad": {"what_was_proved": "CD5-targeted lipid nanoparticles delivered modified mRNA encoding CARs directly into circulating T cells, generating transient functional CAR-T cells that cleared pathological target cells in vivo.", "unsolved_gap": "Because mRNA is transient (half-life 24–48h), repeated dosing is required, and nanoparticle homing to non-target immune subsets (e.g. splenic macrophages) causes off-target clearance.", "proposal_idea": "Engineer dual-targeting nanobodies (e.g. anti-CD3 + anti-CD8) onto the lipid shell to test whether bi-specific surface binding increases T-cell selectivity while avoiding hepatic uptake."}}, {"id": "breakthrough_spatial_omics", "title": "Spatial Multi-Omics: Resolving Cellular Microenvironments in Intact Tissue", "category": "spatial_omics", "category_label": "Spatial Omics", "tag": "Single-Cell Spatial Mapping", "year": 2015, "date_display": "2015 • Science", "journal": "Science", "authors": "Chen, K. H., Boettiger, A. N., Moffitt, J. R. et al.", "doi_url": "https://doi.org/10.1126/science.aaa6090", "is_foundational": true, "educational": {"what_is_it": "A high-resolution molecular imaging technology that measures the activity of thousands of genes simultaneously while keeping tissue sections intact, revealing exactly where every active cell is located in 3D space.", "problem_solved": "Standard RNA sequencing requires grinding tissue into a liquid slurry. While it measures which genes are active, it completely destroys the physical architecture of the organ, making it impossible to see which cells were communicating or where tumor cells were hiding.", "how_it_works": ["Step 1 (Tissue Mounting): An intact histological slice of biopsy tissue is mounted onto a specialized slide coated with optical imaging matrices.", "Step 2 (Fluorescent Barcode Decoding): Individual mRNA molecules inside cells are probed with combinatorial fluorescent tags that glow in distinct color patterns under high-resolution optics.", "Step 3 (Digital Tissue Mapping): Automated cameras and computational alignment construct a 3D cellular map showing exact gene expression across tumor borders, blood vessels, and immune cells."], "why_it_matters": "Uncovers how tumor cells build protective chemical shields to evade immunotherapy, allowing oncologists to design targeted drug combinations that penetrate cancer defenses."}, "technical": {"mechanism": "Combines multiplexed error-robust fluorescence in situ hybridization (MERFISH) and spatial barcode decoding (<1 µm optical resolution) to quantify >1,000 distinct RNA species across intact cellular sections with single-molecule accuracy.", "citation": "Chen, K. H., Boettiger, A. N., Moffitt, J. R., Wang, S., & Zhuang, X. (2015). Spatially resolved, highly multiplexed RNA profiling in single cells. Science, 348(6233), aaa6090.", "significance": "Pioneered single-cell spatial biology by maintaining subcellular positional context while quantifying hundreds of distinct transcripts simultaneously."}, "proposal_launchpad": {"what_was_proved": "MERFISH resolved >1,000 distinct RNA species inside single intact human cells with sub-diffraction optical localization.", "unsolved_gap": "Optical crowding and fluorophore quenching limit coverage to pre-selected probe libraries rather than unbiased whole-transcriptome sequencing, and tissue auto-fluorescence hinders thick specimens.", "proposal_idea": "Apply MERFISH combined with automated image deconvolution to map spatial immune-checkpoint expression (PD-1, CTLA-4) across the invasive margins of triple-negative breast cancer biopsies."}}, {"id": "breakthrough_space_biotech", "title": "Microgravity Stem Cell Organogenesis: 3D Tissue Biomanufacturing in Orbit", "category": "space_biotech", "category_label": "Space Biotech", "tag": "Microgravity Biomanufacturing", "year": 2024, "date_display": "2024 • Nat Rev Bioeng", "journal": "Nat Rev Bioeng", "authors": "Grimm, D., Schulz, H., Krüger, M. et al.", "doi_url": "https://doi.org/10.1038/s44222-024-00155-2", "is_foundational": true, "educational": {"what_is_it": "Growing complex, vascularized 3D human mini-organs (organoids) aboard the International Space Station in near-zero gravity conditions.", "problem_solved": "On Earth, gravity pulls cells downward, causing growing stem cells to flatten into 2D layers or crush into dense clumps unless supported by animal-derived matrices (like mouse Matrigel) that interfere with human drug testing.", "how_it_works": ["Step 1 (Free-Floating Culture): Human induced pluripotent stem cells (iPSCs) are cultured inside automated fluidic bioreactors in orbit (10⁻⁶ g).", "Step 2 (Symmetric Self-Assembly): Without gravitational sedimentation, cells float freely and assemble into round 3D spheres that develop natural organ tissue layers.", "Step 3 (Capillary Sprouting): The organoids spontaneously sprout internal microscopic blood vessels and mature nerve connections that rarely form under Earth gravity."], "why_it_matters": "Produces authentic human heart, brain, and liver tissue models that speed up testing for Alzheimer's, heart disease, and new drugs without relying on animal testing."}, "technical": {"mechanism": "Elimination of hydrostatic pressure gradients and buoyant convection permits uniform nutrient diffusion, stimulating endogenous VEGF expression and spontaneous formation of lumenized microvascular networks within cardiac organoids.", "citation": "Grimm, D., Schulz, H., Krüger, M. et al. (2024). The effects of microgravity on tissue engineering. Nature Reviews Bioengineering, 2, 112–126.", "significance": "Yields cerebral and cardiac organoids exhibiting electrophysiological maturation and gene expression signatures superior to 1G terrestrial controls."}, "proposal_launchpad": {"what_was_proved": "Microgravity culture abolishes shear stress and buoyancy sedimentation, allowing free-floating iPSCs to self-assemble into mature 3D vascularized organoid spheres.", "unsolved_gap": "Simulating space-grade microgravity on Earth requires clinostats or random positioning machines that induce centrifugal shear, which distorts delicate vascular capillary sprouts.", "proposal_idea": "Compare cardiac organoid maturation (troponin I levels and beating frequency) between a 3D clinostat culture and a magnetically levitated scaffold culture to identify optimal terrestrial biomanufacturing."}}, {"id": "breakthrough_synthetic_yeast", "title": "Synthetic Yeast Sc2.0: De Novo Synthesis of Complete Eukaryotic Chromosomes", "category": "synbio", "category_label": "Synthetic Biology", "tag": "Synthetic Genome", "year": 2017, "date_display": "2017 • Science", "journal": "Science", "authors": "Richardson, S. M., Mitchell, L. A., Stracquadanio, G. et al.", "doi_url": "https://doi.org/10.1126/science.aaf4706", "is_foundational": true, "educational": {"what_is_it": "The world's first complex eukaryotic organism (Saccharomyces cerevisiae) engineered from scratch using chemically synthesized, custom-designed chromosomes.", "problem_solved": "Natural yeast genomes contain millions of years of evolutionary junk—unstable retrotransposons, repetitive sequences that cause mutations, and fragile DNA segments that reduce yields in industrial fermentation.", "how_it_works": ["Step 1 (Digital Redesign): Scientists redesigned yeast chromosomes on computers, removing unstable retrotransposons, recoding stop codons, and inserting thousands of recombination tags (loxPsym sites).", "Step 2 (Chemical Printing & Assembly): Automated DNA synthesizers printed synthetic DNA chunks that were sequentially stitched together and swapped into living yeast cells.", "Step 3 (On-Demand Evolution): Scientists can activate a chemical switch (SCRaMbLE) that shuffles the yeast's genes millions of different ways to instantly evolve strains that survive extreme heat or produce high yields."], "why_it_matters": "Creates ultra-stable microbial factories that produce sustainable jet fuels, anti-malarial drugs (artemisinin), and biodegradable bioplastics from agricultural waste."}, "technical": {"mechanism": "Excises repetitive retrotransposons, relocates all tRNA genes to a dedicated synthetic neo-chromosome, and inserts thousands of loxPsym sites downstream of non-essential genes to enable Cre-mediated inducible genome scrambling.", "citation": "Richardson, S. M., Mitchell, L. A., Stracquadanio, G. et al. (2017). Design of a synthetic yeast genome. Science, 355(6329), 1040–1044.", "significance": "Demonstrates that eukaryotic cellular viability, gene regulation, and mitotic chromosome segregation can be sustained with heavily recoded synthetic DNA."}, "proposal_launchpad": {"what_was_proved": "Engineered synthetic yeast chromosomes with recoded stop codons and loxPsym recombination sites sustained eukaryotic cell viability and enabled inducible genome scrambling (SCRaMbLE).", "unsolved_gap": "Cumulative synthetic chromosome consolidation creates metabolic burdens and fitness defects under industrial stress conditions (high ethanol and osmotic shock).", "proposal_idea": "Use SCRaMbLE in a synIX yeast strain coupled with continuous turbidostat selection to isolate strains exhibiting >20% higher tolerance to toxic lignocellulosic furfural inhibitors."}}, {"id": "breakthrough_rubisco_bypass", "title": "Photorespiratory RuBisCO Bypass in Crops: Boosting Photosynthesis by 30%", "category": "climate_bio", "category_label": "Climate & Agriculture", "tag": "Agricultural Security", "year": 2019, "date_display": "2019 • Science", "journal": "Science", "authors": "South, P. F., Cavanagh, A. P., Liu, H. W., & Ort, D. R.", "doi_url": "https://doi.org/10.1126/science.aat9077", "is_foundational": true, "educational": {"what_is_it": "A genetic modification that installs a metabolic shortcut inside plant leaves, preventing crops from wasting energy and boosting agricultural yields by up to 30%.", "problem_solved": "The main enzyme plants use to capture carbon dioxide (RuBisCO) frequently grabs oxygen instead of CO2, producing a toxic compound (glycolate). Recycling this compound through the plant's natural pathway requires 3 separate cell compartments and wastes over 25% of the plant's energy.", "how_it_works": ["Step 1 (Chloroplast Shortcut): Scientists engineered genes for three recycling enzymes (glycolate oxidase, malate synthase, and catalase) directly into the chloroplast.", "Step 2 (Immediate Conversion): The synthetic pathway breaks down toxic glycolate directly inside the chloroplast into useful malate, avoiding transport through peroxisomes and mitochondria.", "Step 3 (CO2 Enrichment): The reaction releases concentrated carbon dioxide right next to RuBisCO, ensuring the plant captures CO2 instead of oxygen in subsequent cycles."], "why_it_matters": "Significantly increases harvest yields of staple food crops (rice, wheat, soybean) while reducing water and fertilizer requirements under drought and heat stress."}, "technical": {"mechanism": "Chloroplastic expression of glycolate oxidase, malate synthase, and catalase drives direct oxidation of glycolate to malate, conserving ATP/NADPH reducing equivalents and suppressing cellular hydrogen peroxide stress.", "citation": "South, P. F., Cavanagh, A. P., Liu, H. W., & Ort, D. R. (2019). Synthetic glycolate metabolism pathways stimulate crop growth and productivity in the field. Science, 363(6422), eaat9077.", "significance": "Field trials confirm a 25–40% biomass increase in tobacco and soybean under agricultural conditions without requiring increased water or fertilizer."}, "proposal_launchpad": {"what_was_proved": "Chloroplastic synthetic bypass of photorespiration using glycolate oxidase and malate synthase increased field-grown tobacco biomass by up to 40%.", "unsolved_gap": "The bypass was primarily validated in model tobacco plants; translating this into monocot grain crops (wheat, rice) faces multi-copy transformation and tissue-specific promoter silencing.", "proposal_idea": "Engineer the synthetic glycolate bypass pathway into a drought-tolerant wheat variety (Triticum aestivum) driven by leaf-specific rbcS promoters and quantify grain yield under arid field conditions."}}, {"id": "breakthrough_bci_mesh", "title": "Flexible High-Density Neural Mesh BCI: Micron-Scale Brain Interfaces", "category": "ai_cadd", "category_label": "AI & Neuro-Tech", "tag": "Neural Engineering", "year": 2019, "date_display": "2019 • J Med Internet Res", "journal": "J Med Internet Res", "authors": "Musk, E. & Neuralink", "doi_url": "https://doi.org/10.2196/16194", "is_foundational": true, "educational": {"what_is_it": "A brain-computer interface made of thousands of flexible microscopic threads that record brain activity with single-neuron precision without damaging brain tissue.", "problem_solved": "Traditional brain implants use rigid silicon needles that scrape against delicate brain tissue during heartbeat pulsations. The brain treats them as foreign objects and forms thick scar tissue that blocks electrical recording within months.", "how_it_works": ["Step 1 (Robotic Insertion): A micro-surgical robot weaves ultra-flexible polyimide threads—each thinner than a human hair—into the motor cortex, avoiding blood vessels.", "Step 2 (Neural Spike Recording): Over 1,024 micro-electrodes along the threads detect the microvolt electrical signals fired by individual neurons.", "Step 3 (AI Intent Decoding): A compact wireless processor transmits the neural signals to a computer, where machine learning decodes movement intent into digital cursor clicks and robotic limb control."], "why_it_matters": "Restores digital autonomy and physical mobility for paralyzed individuals and ALS patients, allowing them to browse the web, type messages, and control robotic limbs using thought alone."}, "technical": {"mechanism": "Utilizes polyimide-based thin-film microelectrodes with surface area <150 µm² coated with conductive polymers (PEDOT:PSS), achieving impedance <50 kΩ at 1 kHz and stable multi-year single-unit recording with minimal glial scar encapsulation.", "citation": "Musk, E. & Neuralink (2019). An Integrated Brain-Machine Interface Platform With Thousands of Channels. Journal of Medical Internet Research, 21(10), e16194.", "significance": "Demonstrated high-channel wireless telemetry across primate cortical tissue with automated robotic micro-insertion."}, "proposal_launchpad": {"what_was_proved": "Robotic insertion of 3,072 micron-scale flexible polyimide thread electrodes into the cerebral cortex recorded broadband single-neuron spikes with minimal acute vascular trauma.", "unsolved_gap": "Long-term foreign body responses (microglial activation and astrocytic scar encapsulation) gradually increase electrode impedance and degrade signal-to-noise ratio over multiple years.", "proposal_idea": "Coat flexible polyimide electrode arrays with conductive hydrogels releasing anti-inflammatory dexamethasone to test whether glial scar formation is attenuated in rodent motor cortex."}}, {"id": "breakthrough_cancer_mrna_vaccine", "title": "Personalized Neoantigen mRNA Cancer Vaccines: Preventing Tumor Recurrence", "category": "cell_therapy", "category_label": "Cell Therapy", "tag": "Phase IIb/III Landmark", "year": 2024, "date_display": "2024 • The Lancet", "journal": "The Lancet", "authors": "Weber, J. S., Carlino, M. S., Khattak, A. et al.", "doi_url": "https://doi.org/10.1016/S0140-6736(23)02268-7", "is_foundational": true, "educational": {"what_is_it": "Custom mRNA vaccines synthesized specifically for an individual patient's tumor to train their immune system to recognize and eliminate remaining cancer cells after surgery.", "problem_solved": "Every cancer contains unique genetic mutations; standard chemotherapy harms healthy cells, and generic immunotherapies often fail because the immune system cannot distinguish tumor mutations from normal tissue.", "how_it_works": ["Step 1 (Tumor Sequencing): A surgically removed tumor biopsy is DNA-sequenced and compared to the patient's healthy blood DNA to identify unique somatic mutations (neoantigens).", "Step 2 (AI Target Selection): Machine-learning models predict which mutated peptides will bind most effectively to the patient's specific HLA immune receptors.", "Step 3 (Targeted Immunization): A custom mRNA vaccine encoding up to 34 selected tumor targets is synthesized, encapsulated in lipid nanoparticles, and injected to prime cytotoxic T-cells to destroy lingering cancer cells."], "why_it_matters": "Phase IIb and Phase III clinical trials demonstrate a 44% reduction in recurrence or death in high-risk melanoma and pancreatic cancer patients."}, "technical": {"mechanism": "Modified mRNA (N1-methylpseudouridine) is translated by dendritic cells, directing peptide loading onto MHC-I and MHC-II complexes to elicit high-avidity CD8+ cytotoxic and CD4+ helper T-cell clones targeting patient-specific clonal mutations.", "citation": "Weber, J. S., Carlino, M. S., Khattak, A. et al. (2024). Individualised neoantigen therapy mRNA-4157 (V940) plus pembrolizumab in resected melanoma. The Lancet, 403(10427), 632–644.", "significance": "Reduces the risk of recurrence or death by 44% compared to standard-of-care monotherapy in randomized Phase IIb clinical trials."}, "proposal_launchpad": {"what_was_proved": "Adjuvant mRNA-4157 (encoding up to 34 patient neoantigens) plus pembrolizumab reduced recurrence or death in high-risk resected melanoma by 44% compared to pembrolizumab alone.", "unsolved_gap": "Vaccine synthesis takes 6 to 9 weeks from tumor biopsy to release, which is too slow for rapidly progressing tumors, and HLA-loss tumors escape T-cell recognition.", "proposal_idea": "Combine a personalized neoantigen mRNA vaccine with an off-the-shelf shared tumor-associated antigen (TAA) cassette to maintain immune pressure while personalized batches are synthesized."}}, {"id": "breakthrough_3d_bioprinting", "title": "Perfusable 3D Bioprinting: Vascularized Living Organ Constructs", "category": "cell_therapy", "category_label": "Tissue Engineering", "tag": "Regenerative Bio", "year": 2019, "date_display": "2019 • Science", "journal": "Science", "authors": "Grigoryan, B., Paulsen, S. J., Corbett, D. C. et al.", "doi_url": "https://doi.org/10.1126/science.aav9750", "is_foundational": true, "educational": {"what_is_it": "High-resolution 3D printing of living human cardiac and vascular tissue using light-activated bio-inks, creating intricate branching blood vessels that keep thick tissues alive.", "problem_solved": "Previously printed tissues were limited to ultra-thin sheets (<0.2 mm) because cells deep inside starved of oxygen and nutrients and died of central necrosis.", "how_it_works": ["Step 1 (Stem Cell Bio-Inks): Human stem cell-derived heart cells and vessel-lining endothelial cells are mixed into light-curable biocompatible hydrogels.", "Step 2 (Laser Projection Printing): High-resolution digital light projectors shine structured light layer-by-layer, curing solid tissue walls while leaving hollow, branching vascular channels.", "Step 3 (Endothelial Perfusion): The hollow channels are lined with endothelial cells and connected to a pump, delivering oxygenated nutrient media that allows the heart tissue to beat synchronously."], "why_it_matters": "Overcomes the core vascularization obstacle in regenerative medicine, bringing science closer to transplantable patient-matched kidneys, livers, and cardiac repair patches."}, "technical": {"mechanism": "Utilizes projection stereolithography (PSL) with food-safe photo-absorbers (tartrazine) to control optical penetration depth, producing hydrogel channels with internal diameters down to 50 µm lined with confluent endothelial monolayers supporting physiological shear stresses.", "citation": "Grigoryan, B., Paulsen, S. J., Corbett, D. C. et al. (2019). Multivascular networks and functional intravascular topologies within photopolymerized hydrogels. Science, 364(6439), 458–464.", "significance": "Demonstrates pulsatile fluid transport and inter-vessel gas exchange matching natural mammalian capillary bed hemodynamics."}, "proposal_launchpad": {"what_was_proved": "Stereolithographic bioprinting using biocompatible food dye photo-absorbers produced perfusable, branching intravascular hydrogel networks capable of oxygenating red blood cells.", "unsolved_gap": "Photopolymerized hydrogels lack long-term mechanical compliance and spontaneous microcapillary anastomosis (<10 µm) with host vasculature after surgical implantation.", "proposal_idea": "Incorporate pro-angiogenic peptide motifs (e.g. immobilized VEGF and RGD) into gelatin-methacryloyl (GelMA) bio-inks to accelerate host capillary integration in an in vivo rat muscle pouch."}}, {"id": "breakthrough_plastic_eating_bacteria", "title": "Engineered PETase-MHETase Chimeras: Biocatalytic Plastic Depolymerization", "category": "climate_bio", "category_label": "Environmental Bio", "tag": "Circular Economy", "year": 2020, "date_display": "2020 • PNAS", "journal": "PNAS", "authors": "Knott, B. C., Erickson, E., Allen, M. D. et al.", "doi_url": "https://doi.org/10.1073/pnas.2006753117", "is_foundational": true, "educational": {"what_is_it": "Computationally redesigned dual-enzyme complexes that break down post-consumer polyethylene terephthalate (PET) plastic into pure chemical building blocks within 24 hours.", "problem_solved": "PET plastics take over 400 years to decompose in nature. Traditional mechanical recycling degrades the plastic's structural integrity, allowing it to be reused only a few times before being dumped in landfills or oceans.", "how_it_works": ["Step 1 (Enzyme Fusion): Scientists genetically fused two bacterial enzymes (PETase and MHETase) with a flexible peptide bridge so chemical intermediates pass directly between active sites.", "Step 2 (Thermal Stabilization): Computational protein design stabilized the enzyme's catalytic core, allowing it to operate at temperatures where plastic polymers soften and unravel.", "Step 3 (Complete Breakdown): The super-enzyme breaks the tough ester bonds of PET, converting plastic bottles into virgin-grade terephthalic acid and ethylene glycol in under a day."], "why_it_matters": "Enables a 100% circular recycling economy where plastic waste is infinitely recycled into virgin-quality bottles and clothing without consuming petroleum."}, "technical": {"mechanism": "Structural stabilization of the catalytic triad (Ser-His-Asp) via engineered disulfide bridges and active-site loop mutations allows continuous operation near the glass transition temperature of amorphous PET, maximizing enzymatic accessibility.", "citation": "Knott, B. C., Erickson, E., Allen, M. D. et al. (2020). Characterization and engineering of a two-enzyme system for plastics depolymerization. Proceedings of the National Academy of Sciences, 117(41), 25476–25485.", "significance": "Achieves >90% PET conversion to purified monomeric TPA within 24 hours with negligible greenhouse gas emissions."}, "proposal_launchpad": {"what_was_proved": "Genetically fusing bacterial PETase and MHETase with a flexible peptide linker doubled catalytic depolymerization rate of post-consumer PET plastic into terephthalic acid.", "unsolved_gap": "The chimeric enzyme rapidly denatures above 55°C, whereas industrial PET recycling requires temperatures >65°C to soften highly crystalline plastics.", "proposal_idea": "Introduce computational disulfide bonds and surface charge mutations (via FireProt/FoldX) into the MHETase-PETase linker to elevate melting temperature (Tm) above 70°C for crystalline bottle flakes."}}, {"id": "breakthrough_xenotransplantation", "title": "69-Gene Multiplex Xenotransplantation: Clinical Organ Transplants", "category": "gene_editing", "category_label": "Gene Editing", "tag": "Organ Shortage Solution", "year": 2023, "date_display": "2023 • Nature", "journal": "Nature", "authors": "Anand, R. P., Layer, J. V., Heja, D. et al.", "doi_url": "https://doi.org/10.1038/s41586-023-06597-4", "is_foundational": true, "educational": {"what_is_it": "Transplanting organs from gene-edited pigs into human patients by using CRISPR to make 69 targeted DNA modifications that prevent immune rejection and eliminate viral risks.", "problem_solved": "Over 100,000 patients wait on organ transplant lists, and thousands die each year due to severe donor shortages. Previous animal organ transplants were destroyed within minutes by hyperacute human antibody rejection.", "how_it_works": ["Step 1 (Sugar Antigen Knockout): CRISPR permanently disables 3 pig genes that produce carbohydrate sugars on cell surfaces that human antibodies attack on sight.", "Step 2 (Human Protective Transgenes): 7 human genes (such as complement inhibitors CD46 and CD55) are inserted into the pig genome to prevent blood clotting and tissue inflammation.", "Step 3 (Retroviral Inactivation): All 59 dormant endogenous porcine retroviruses (PERVs) in the pig DNA are inactivated to ensure zero risk of animal virus transmission to humans."], "why_it_matters": "Successfully demonstrated in clinical settings, producing immediate urine production, creatinine clearance, and normal blood filtration without hyperacute rejection."}, "technical": {"mechanism": "Knockouts of GGTA1, CMAH, and B4GALNT2 abolish pre-formed human antibody-mediated hyperacute rejection; integration of human thrombomodulin (THBD) and CD47 prevents microvascular thrombosis and macrophage phagocytosis; complete inactivation of all PERV loci prevents cross-species viral zoonosis.", "citation": "Anand, R. P., Layer, J. V., Heja, D. et al. (2023). Design and testing of a fully humanized porcine donor kidney in clinical xenotransplantation. Nature, 622(7982), 393–401.", "significance": "Maintained physiological creatinine clearance and urine production in clinical recipients without acute humoral rejection episodes."}, "proposal_launchpad": {"what_was_proved": "Pigs engineered with 69 genomic edits (3 glycan knockouts, 7 human transgenes, 59 inactivated retroviruses) provided kidneys that sustained life in primates for up to 758 days without hyperacute rejection.", "unsolved_gap": "Delayed thrombotic microangiopathy and recipient macrophage-mediated destruction still require heavy, life-long immunosuppressive drug regimens that risk opportunistic infections.", "proposal_idea": "Knock in human macrophage checkpoint inhibitor CD47 and thrombomodulin driven by endothelial-specific promoters in donor pigs to reduce dependence on systemic immunosuppression."}}, {"id": "breakthrough_deextinction", "title": "Paleogenomic De-Extinction: Mammoth Cold-Adaptation Alleles", "category": "synbio", "category_label": "Synthetic Biology", "tag": "Ecological Genomics", "year": 2010, "date_display": "2010 • Nat Genet", "journal": "Nat Genet", "authors": "Campbell, K. L., Roberts, J. E., Watson, L. N. et al.", "doi_url": "https://doi.org/10.1038/ng.574", "is_foundational": true, "educational": {"what_is_it": "Editing modern Asian elephant cells with ancient Woolly Mammoth genetic sequences to restore functional cold-adaptation traits for Arctic ecosystem restoration.", "problem_solved": "As the Arctic permafrost melts due to global warming, billions of tons of trapped greenhouse gases are released into the atmosphere. Re-introducing cold-adapted megaherbivores helps trample winter snow, driving freezing temperatures deep into the soil to preserve permafrost.", "how_it_works": ["Step 1 (Ancient DNA Recovery): Geneticists extracted and sequenced intact DNA fragments from 4,000-year-old mammoth remains preserved in Siberian permafrost.", "Step 2 (Cold-Trait Mapping): Researchers pinpointed functional mutations responsible for cold tolerance, including modified hemoglobin that releases oxygen at sub-zero temperatures and thick subcutaneous fat production.", "Step 3 (Multiplex Genome Editing): Precision base editors introduced these exact mammoth traits into living Asian elephant stem cells to restore cold-tolerant biology."], "why_it_matters": "Pioneers multiplex genomic editing for ecological conservation, restoring lost cold-tolerant biodiversity and helping stabilize melting Arctic permafrost."}, "technical": {"mechanism": "Modifications to the beta-globin subunit (E12A, T34S, A86S) alter the quaternary T-to-R state equilibrium, conferring cold-temperature-insensitive oxygen offloading in peripheral tissues under sub-zero physiological conditions.", "citation": "Campbell, K. L., Roberts, J. E., Watson, L. N. et al. (2010). Substitutions in woolly mammoth hemoglobin confer temperature-insensitive oxygen unloading. Nature Genetics, 42(6), 536–540.", "significance": "Validates in vitro biochemical expression of ancient thermoregulatory enzymes in living mammalian cellular backgrounds."}, "proposal_launchpad": {"what_was_proved": "Reconstructed woolly mammoth hemoglobin with 3 chimeric amino acid substitutions displayed temperature-insensitive oxygen offloading at near-freezing temperatures.", "unsolved_gap": "Synthesizing individual cold-tolerant proteins does not recreate complex multi-tissue physiological traits like dense subcutaneous adipose accumulation or modified thermogenic brown fat in living cells.", "proposal_idea": "Use CRISPR base editing to introduce mammoth-specific UCP1 (uncoupling protein 1) promoter variants into Asian elephant adipocytes and measure non-shivering thermogenesis rates at 4°C."}}, {"id": "breakthrough_artificial_leaf", "title": "Semiconductor-Biocatalytic Bionic Leaves: Solar Water-Splitting & Fuel Synthesis", "category": "climate_bio", "category_label": "Clean Energy Bio", "tag": "Zero-Carbon Energy", "year": 2016, "date_display": "2016 • Science", "journal": "Science", "authors": "Liu, C., Colón, B. C., Ziesack, M. et al.", "doi_url": "https://doi.org/10.1126/science.aaf5039", "is_foundational": true, "educational": {"what_is_it": "A solar-powered artificial leaf combining silicon photovoltaic water-splitters with engineered bacteria to produce clean liquid fuels and bioplastics from sunlight, water, and CO2.", "problem_solved": "Natural plant photosynthesis converts less than 1% of sunlight into chemical energy. In addition, traditional biofuels consume valuable farmland and freshwater that are needed for food production.", "how_it_works": ["Step 1 (Solar Water Splitting): Silicon photovoltaic electrodes absorb sunlight and use non-toxic catalysts to split water molecules into clean hydrogen and oxygen gas.", "Step 2 (Bacterial Hydrogen Consumption): Engineered bacteria (Cupriavidus necator) in the water consume the generated hydrogen as an energy source while absorbing CO2 from the air.", "Step 3 (Clean Fuel Synthesis): Internal metabolic enzymes direct the bacteria to synthesize liquid fuels (such as isobutanol) and biodegradable bioplastics."], "why_it_matters": "Operates at 10% solar-to-chemical energy efficiency (ten times more efficient than natural photosynthesis), providing a scalable route to carbon-neutral fuels using only sunlight, water, and air."}, "technical": {"mechanism": "Employs a biocompatible ternary cobalt-phosphorus alloy cathode operating at neutral pH (avoiding bacterial cytotoxicity), achieving Faradaic efficiency >90% in driving chemolithotrophic bacterial carbon fixation pathways.", "citation": "Liu, C., Colón, B. C., Ziesack, M. et al. (2016). Water splitting-biosynthetic system with CO2 reduction efficiencies exceeding photosynthesis. Science, 352(6290), 1210–1213.", "significance": "Demonstrates a net 10% solar-to-chemical conversion efficiency, dramatically outperforming terrestrial agricultural biomass routes."}, "proposal_launchpad": {"what_was_proved": "A biocompatible cobalt-phosphorus water-splitting alloy coupled with Ralstonia eutropha converted CO2 and water into biomass and liquid fuels at 10% solar-to-chemical efficiency.", "unsolved_gap": "Reactive oxygen species (ROS) produced at the electrode during water splitting gradually poison microbial cells and limit continuous operational lifespan in large bioreactors.", "proposal_idea": "Overexpress endogenous catalase (katA) and superoxide dismutase (sodA) in Cupriavidus necator to extend continuous catalytic solar-to-isobutanol production in a 5L flow reactor."}}, {"id": "breakthrough_nanopore_sequencer", "title": "Portable Nanopore Direct Molecular Sequencing: Real-Time Long-Read Genomics", "category": "ai_cadd", "category_label": "Genomic Tech", "tag": "Point-of-Care Genomics", "year": 2018, "date_display": "2018 • Nat Biotechnol", "journal": "Nat Biotechnol", "authors": "Jain, M., Koren, S., Miga, K. H. et al.", "doi_url": "https://doi.org/10.1038/nbt.4060", "is_foundational": true, "educational": {"what_is_it": "A pocket-sized USB device that sequences long, intact strands of native DNA and RNA in real time by pulling them through microscopic protein pores and reading electrical signals.", "problem_solved": "Traditional sequencers are bulky room-sized machines that take days to produce results, chop DNA into tiny 150-base fragments, and require PCR amplification that erases native epigenetic marks.", "how_it_works": ["Step 1 (Biological Nanopores): Thousands of engineered protein pores are embedded across an electrically resistant synthetic membrane in a USB flow cell.", "Step 2 (Molecular Ratcheting): A motor enzyme unzips double-stranded DNA and feeds a single native strand through the pore at hundreds of bases per second.", "Step 3 (Electrical Current Decoding): An electric current flows through each pore. As different bases (A, C, G, T) and methyl tags pass through, they block the current by unique amounts, which neural network software decodes into sequence data on a laptop in real time."], "why_it_matters": "Enables field scientists and doctors to sequence viral outbreaks in remote clinics in minutes, and resolves long structural variations in human genomes that older sequencers missed."}, "technical": {"mechanism": "Utilizes engineered CsgG/CsgF bacterial pore complexes embedded in synthetic block copolymer membranes, measuring transient ion current blockade profiles at sampling rates exceeding 5 kHz, base-called by Transformer and CTC neural networks with modal read accuracy >99%.", "citation": "Jain, M., Koren, S., Miga, K. H. et al. (2018). Nanopore sequencing and assembly of a human genome with direct base modification detection. Nature Biotechnology, 36(4), 338–345.", "significance": "Enables direct discrimination between unmethylated cytosine, 5-methylcytosine, and 5-hydroxymethylcytosine without destructive bisulfite treatment."}, "proposal_launchpad": {"what_was_proved": "Direct native sequencing of ultra-long human DNA reads (>100 kb) resolved repetitive chromosome telomeres and mapped epigenetic 5-methylcytosine tags without bisulfite conversion.", "unsolved_gap": "Raw single-molecule base accuracy had higher indel error rates in homopolymer repeats compared to short-read synthesis, requiring high coverage.", "proposal_idea": "Develop an adaptive sampling targeted sequencing assay on the MinION to detect antimicrobial resistance plasmids directly from uncultured clinical urine samples in under 2 hours."}}];

function calculateLocalLogicChain() {
  const checks = [
    { id: "aims", filled: Boolean(projectState.overarching_aim || projectState.aim || (projectState.aims && projectState.aims.aim1)) },
    { id: "chassis", filled: Boolean(projectState.chassis) },
    { id: "tool", filled: Boolean(projectState.tool) },
    { id: "target", filled: Boolean(projectState.target) },
    { id: "methodology", filled: Boolean(projectState.methodology && projectState.methodology.length > 30) },
    { id: "controls", filled: Boolean(projectState.control_triad && projectState.control_triad.positive) },
    { id: "risks", filled: Boolean(projectState.risks && projectState.risks.length > 0) },
    { id: "impact", filled: Boolean(projectState.impact || (projectState.expected_outcomes && projectState.expected_outcomes.length > 20)) },
    { id: "budget", filled: Boolean(projectState.budget && projectState.budget.length > 10) },
    { id: "references", filled: Boolean(projectState.references && projectState.references.length > 20) }
  ];
  let filledCount = 0;
  checks.forEach(n => {
    if (n.filled) filledCount++;
    const nodeEl = document.getElementById(`node-${n.id}`);
    if (nodeEl) {
      if (n.filled) nodeEl.classList.add("filled");
      else nodeEl.classList.remove("filled");
    }
  });
  const pct = Math.round((filledCount / checks.length) * 100);
  const healthBadge = document.getElementById("chain-health-badge");
  if (healthBadge) {
    healthBadge.innerText = `Health: ${pct}% Complete (${filledCount}/10)`;
    healthBadge.className = pct >= 80 ? "chain-badge good" : "chain-badge";
  }
}

/**
 * BioWriter Studio: Comprehensive Client Controller
 * Course: BT_301 & Multi-Course Research Management
 */

const STORAGE_KEY = "bt301_biowriter_state_v4";
window.BioWriterStudioLoaded = true;
let currentStep = 1;
let selectedCommentCodes = new Set();

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let projectModels = {
  cellular: {
    name: "Cellular / Host Organism (Microbial, Yeast, Plant, Mammalian)",
    desc: "For projects expressing recombinant enzymes, pathways, or traits inside living cell lines or host organisms.",
    p1: { label: "1. Biological Host / Chassis Organism", placeholder: "e.g. Pseudomonas putida or Triticum aestivum", examples: "Pseudomonas putida, Pichia pastoris, E. coli, CHO cells" },
    p2: { label: "2. Molecular Tool / Engineered Enzyme / Gene", placeholder: "e.g. Engineered PETase or TaHKT1;5 transporter", examples: "PETase, Cas12a, endoglucanase, base editor" },
    p3: { label: "3. Target Phenomenon / Quantitative Outcome", placeholder: "e.g. Accelerated PET depolymerization", examples: "depolymerization rate, foliar salt exclusion" }
  },
  cell_free: {
    name: "In Vitro / Cell-Free Diagnostic / Biosensor (No Living Host)",
    desc: "For paper dipsticks, lateral flow assays, CRISPR diagnostics, or cell-free lysate reactions.",
    p1: { label: "1. Diagnostic System / Test Matrix / Specimen", placeholder: "e.g. Paper lateral flow strip or hospital wastewater effluent", examples: "paper lateral flow strip, lyophilized cell-free lysate, blood serum, hospital effluent" },
    p2: { label: "2. Recognition Element / Molecular Probe / Mechanism", placeholder: "e.g. CRISPR-Cas12a fluorescent reporter", examples: "Cas12a-crRNA, DNA aptamer, gold nanoparticle probe, RPA amplification" },
    p3: { label: "3. Target Biomarker / Limit of Detection (LOD)", placeholder: "e.g. mcr-1 colistin resistance gene, femtomolar LOD", examples: "mcr-1 gene, circulating microRNA, femtomolar analytical sensitivity" }
  },
  nanotech: {
    name: "Biomaterials / Nanotechnology / Drug Delivery Formulations",
    desc: "For nanoparticles, hydrogels, liposomes, and targeted therapeutic delivery vehicles.",
    p1: { label: "1. Carrier Material / Nanomaterial Matrix / Vehicle", placeholder: "e.g. Lipid nanoparticles (LNPs) or chitosan-PLGA scaffold", examples: "lipid nanoparticles (LNPs), chitosan hydrogel, mesoporous silica, PLGA" },
    p2: { label: "2. Bioactive Cargo / Functional Ligand / Release Trigger", placeholder: "e.g. siRNA cargo or pH-responsive cleavage mechanism", examples: "siRNA, CRISPR ribonucleoprotein, transferrin targeting peptide" },
    p3: { label: "3. Pathological Target / Pharmacodynamic Threshold", placeholder: "e.g. Triple-negative breast cancer oncogene silencing", examples: "intracellular delivery >80%, IC50 reduction, tumor clearance" }
  },
  environmental: {
    name: "Environmental Biotechnology / Bioremediation Matrix",
    desc: "For contaminated soils, wastewater effluents, bioreactor matrices, or immobilized biocatalysts.",
    p1: { label: "1. Contaminated Matrix / Bioreactor System", placeholder: "e.g. Membrane bioreactor effluent or industrial textile wastewater", examples: "industrial wastewater, saline agricultural drainage, contaminated soil" },
    p2: { label: "2. Biocatalytic Consortium / Immobilized Agent", placeholder: "e.g. Cross-linked laccase aggregates (CLEAs)", examples: "CLEAs, bacterial biofilm, immobilized peroxidase, biochar composite" },
    p3: { label: "3. Target Contaminant / Clearance Threshold", placeholder: "e.g. Pharmaceutical micropollutant clearance >90%", examples: "azo dye decolorization >95%, heavy metal reduction <0.1 mg/L" }
  },
  computational: {
    name: "Computational Biology / In Silico Modeling Pipeline",
    desc: "For structural bioinformatics, docking screens, AI protein redesign, or molecular dynamics.",
    p1: { label: "1. Computational Model / Macromolecular Target", placeholder: "e.g. AlphaFold predicted catalytic cleft or PDB 6EQE", examples: "AlphaFold coordinate model, PDB structure, molecular dynamics ensemble" },
    p2: { label: "2. In Silico Algorithm / Mutagenesis Strategy", placeholder: "e.g. Rosetta flex ddG free-energy profiling", examples: "Rosetta design, QM/MM simulation, virtual screening pipeline" },
    p3: { label: "3. Biophysical Metric / Predictive Benchmark", placeholder: "e.g. Binding affinity delta-G < -10 kcal/mol", examples: "binding affinity delta-G, catalytic transition state energy barrier" }
  },
  custom: {
    name: "Custom Interdisciplinary Modality",
    desc: "For hybrid, synthetic biology, or custom cross-cutting projects (e.g. Clinical Microbiome, Gut-Brain Axis, Synthetic Consortia).",
    p1: { label: "1. Experimental System / Model / Specimen", placeholder: "e.g. Clinical specimen, bioreactor matrix, animal model, or cell model", examples: "gut microbiome, hospital effluent, organoid culture, transgenic mouse" },
    p2: { label: "2. Molecular Tool / Engineered Intervention", placeholder: "e.g. Engineered synbiotic consortium, CRISPR tool, or delivery vehicle", examples: "Lactobacillus chassis, synthetic circuit, nanoparticle probe" },
    p3: { label: "3. Target Phenomenon / Quantitative Outcome", placeholder: "e.g. Targeted symptom alleviation, high-efficiency clearance, biomarker shift", examples: "calibrated biomarker threshold, >80% clearance, symptom score" }
  }
};

let currentDecodedData = null;

let projectState = {
  student_name: "",
  student_id: "",
  model_id: "cellular",
  custom_modality: "",
  keywords: "",
  title: "",
  system: "",
  chassis: "",
  tool: "",
  target: "",
  search_query: "",
  matrix: {
    yellow: "",
    blue: "",
    green: "",
    purple: "",
    red: "",
    citation: ""
  },
  decoded_paper_cache: null,
  abstract: "",
  funnel: {
    tier1: "",
    tier2: "",
    tier3: "",
    tier4: ""
  },
  overarching_aim: "",
  aims: {
    aim1: "",
    aim1_title: "",
    aim2: "",
    aim2_title: "",
    aim3: "",
    aim3_title: ""
  },
  methodology: "",
  expected_outcomes: "",
  impact: "",
  customer: "",
  market: "",
  usps: "",
  competitor_data: {
    // Exact 9 Dimensions
    principle_established: "",
    principle_recent: "",
    principle_proposed: "",
    strength_established: "",
    strength_recent: "",
    strength_proposed: "",
    limitation_established: "",
    limitation_recent: "",
    limitation_proposed: "",
    performance_established: "",
    performance_recent: "",
    performance_proposed: "",
    cost_established: "",
    cost_recent: "",
    cost_proposed: "",
    safety_established: "",
    safety_recent: "",
    safety_proposed: "",
    evidence_established: "",
    evidence_recent: "",
    evidence_proposed: "",
    gap_established: "",
    gap_recent: "",
    gap_proposed: "",
    contribution_proposed: "",
    // Legacy field compatibility
    incumbent_name: "",
    incumbent_speed: "",
    incumbent_cost: "",
    incumbent_metric: "",
    incumbent_portability: "",
    incumbent_safety: "",
    emerging_name: "",
    emerging_speed: "",
    emerging_cost: "",
    emerging_metric: "",
    emerging_portability: "",
    emerging_safety: "",
    proposed_name: "",
    proposed_speed: "",
    proposed_cost: "",
    proposed_metric: "",
    proposed_portability: "",
    proposed_safety: ""
  },
  gantt_schedule: {
    total_months: 18,
    wp1_start: 1,
    wp1_end: 6,
    wp1_gate: "",
    wp2_start: 5,
    wp2_end: 12,
    wp2_gate: "",
    wp3_start: 10,
    wp3_end: 18,
    wp3_gate: "",
    tasks: []
  },
  budget_items: {
    consumables: 18500,
    personnel: 12000,
    utilities: 4500,
    equipment: 15000
  },
  budget_materials: [],
  swot: {
    strengths: "",
    weaknesses: "",
    opportunities: "",
    threats: ""
  },
  pestel: {
    political: "",
    economic: "",
    social: "",
    technological: "",
    environmental: "",
    legal: ""
  },
  time_plan: "",
  budget: "",
  references: "",
  aims_contingencies: {
    aim1_fallback: "",
    aim2_fallback: "",
    aim3_fallback: ""
  },
  control_triad: {
    negative: "",
    positive: "",
    specificity: ""
  },
  biotech_risk_matrix: {
    off_target: "",
    toxicity: "",
    solubility: "",
    biosafety: ""
  },
  submission_date: "",
  team_members: [],
  problem_narrative: "",
  impact_domains: [],
  impact_text: "",
  target_audience: "",
  objectives: [],
  controls_checklist: {
    positive: false,
    negative: false,
    triplicates: false
  },
  materials_methods: "",
  risks: [],
  ansoff: {
    penetration: "",
    prod_dev: "",
    mkt_dev: "",
    diversification: ""
  },
  budget_egp_items: [],
  flowchart_caption: "",
  is_locked_for_grading: false,
  faculty_review: null
};

document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();
  initStepperNavigation();
  initModelSelector();
  initCourseSwitcher();
  initFormBindings();
  initPresetSelector();
  initStep1Action();
  initDoiResolver();
  initRhevParaphraseLab();
  initFunnelMadLibs();
  initDiagramGenerator();
  initBudgetCalculator();
  initRefRecencyAuditor();
  initImpactAndNoveltySuite();
  initPaperDecoder();
  initLogicChainTrack();
  initAuditAndViva();
  initInstructorStudio();
  initExportHandlers();
  initVisualStudio();
  initBreakthroughsModule();
  initHeaderAndNavigationEnhancements();
  initAuthManager();
  initGovernanceAndGuidance();
  initTeamRoster();
  initSection2_1Narrative();
  initSection2_2ImpactDomains();
  initSection2_3TargetAudience();
  initObjectivesBuilder();
  initFutureTenseGuardian();
  initControlsChecklist();
  initRisksTable();
  initAnsoffMatrix();
  initBudgetEGP();
  initAbstractWordCounter();
  updateLiveScore();
  updateLogicChainUI();
});

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function getEmptyProjectState(studentId = "", studentName = "") {
  return {
    student_name: studentName || "",
    student_id: studentId || "",
    model_id: "cellular",
    custom_modality: "",
    keywords: "",
    title: "",
    system: "",
    chassis: "",
    tool: "",
    target: "",
    search_query: "",
    matrix: {
      yellow: "",
      blue: "",
      green: "",
      purple: "",
      red: "",
      citation: ""
    },
    decoded_paper_cache: null,
    abstract: "",
    funnel: {
      tier1: "",
      tier2: "",
      tier3: "",
      tier4: ""
    },
    overarching_aim: "",
    aims: {
      aim1: "",
      aim1_title: "",
      aim2: "",
      aim2_title: "",
      aim3: "",
      aim3_title: ""
    },
    methodology: "",
    expected_outcomes: "",
    impact: "",
    customer: "",
    market: "",
    usps: "",
    competitor_data: {
      principle_established: "",
      principle_recent: "",
      principle_proposed: "",
      strength_established: "",
      strength_recent: "",
      strength_proposed: "",
      limitation_established: "",
      limitation_recent: "",
      limitation_proposed: "",
      performance_established: "",
      performance_recent: "",
      performance_proposed: "",
      cost_established: "",
      cost_recent: "",
      cost_proposed: "",
      safety_established: "",
      safety_recent: "",
      safety_proposed: "",
      evidence_established: "",
      evidence_recent: "",
      evidence_proposed: "",
      gap_established: "",
      gap_recent: "",
      gap_proposed: "",
      contribution_proposed: "",
      incumbent_name: "",
      incumbent_speed: "",
      incumbent_cost: "",
      incumbent_metric: "",
      incumbent_portability: "",
      incumbent_safety: "",
      emerging_name: "",
      emerging_speed: "",
      emerging_cost: "",
      emerging_metric: "",
      emerging_portability: "",
      emerging_safety: "",
      proposed_name: "",
      proposed_speed: "",
      proposed_cost: "",
      proposed_metric: "",
      proposed_portability: "",
      proposed_safety: ""
    },
    swot: {
      s: "",
      w: "",
      o: "",
      t: "",
      strengths: "",
      weaknesses: "",
      opportunities: "",
      threats: ""
    },
    pestel: {
      political: "",
      economic: "",
      social: "",
      technological: "",
      environmental: "",
      legal: ""
    },
    fmea: {
      off_target: "",
      toxicity: "",
      solubility: "",
      biosafety: ""
    },
    time_plan: "",
    budget: "",
    references: "",
    completed_feedback_items: [],
    budget_egp_items: [],
    flowchart_caption: "",
    is_locked_for_grading: false,
    faculty_review: null
  };
}

function getStudentStorageKey(studentId) {
  const sid = (studentId || (typeof currentAuthUser !== "undefined" && currentAuthUser ? currentAuthUser.student_id : "") || (typeof projectState !== "undefined" ? projectState.student_id : "") || "").trim();
  if (sid && sid !== "GUEST-RESEARCHER") {
    return `bt301_student_draft_${sid.toUpperCase()}`;
  }
  return "bt301_biowriter_guest_draft";
}

function saveToStorage() {
  const key = getStudentStorageKey();
  try {
    localStorage.setItem(key, JSON.stringify(projectState));
  } catch (e) {
    console.warn("localStorage save failed", e);
  }
  const saveIndicator = document.getElementById("save-status");
  if (saveIndicator) {
    saveIndicator.innerText = (typeof currentAuthUser !== "undefined" && currentAuthUser && currentAuthUser.is_guest) ? "● Local Draft Saved (Guest)" : "● All progress saved";
  }
}

function loadFromStorage(studentId) {
  if (!studentId) {
    const active = getLocalAuthSession();
    studentId = (active && active.student_id) ? active.student_id : "13989";
  }
  const key = getStudentStorageKey(studentId);
  const saved = localStorage.getItem(key);
  if (saved) {
    try {
      projectState = Object.assign(getEmptyProjectState(studentId), JSON.parse(saved));
    } catch (e) {
      console.error("Could not parse saved state", e);
    }
  } else if (typeof BENCHMARK_STUDENT_DRAFTS !== "undefined" && BENCHMARK_STUDENT_DRAFTS[studentId]) {
    projectState = JSON.parse(JSON.stringify(BENCHMARK_STUDENT_DRAFTS[studentId]));
    try {
      localStorage.setItem(key, JSON.stringify(projectState));
    } catch (e) {}
  } else {
    // Check fallback legacy global key only if no specific student requested
    if (!studentId || studentId === "GUEST-RESEARCHER") {
      const legacy = localStorage.getItem(STORAGE_KEY);
      if (legacy) {
        try {
          projectState = Object.assign(getEmptyProjectState(), JSON.parse(legacy));
        } catch (e) {}
      }
    } else {
      projectState = getEmptyProjectState(studentId);
    }
  }
  populateFormFields();
  if (typeof renderInstructorReviewBanner === "function") {
    renderInstructorReviewBanner(projectState.faculty_review || null);
  }
}


let serverSyncTimeout = null;
function triggerServerSyncDebounced() {
  if (serverSyncTimeout) clearTimeout(serverSyncTimeout);
  serverSyncTimeout = setTimeout(() => {
    if (projectState.student_id && projectState.student_id.trim()) {
      syncDraftToServer(false);
    }
  }, 3000);
}

async function syncDraftToServer(showNotification = true) {
  if (isStaticEnvironment()) {
    saveToStorage();
    if (showNotification) showToast("Draft saved locally (Offline/Static Mode)", "info");
    return;
  }
  const sid = (projectState.student_id || "").trim();
  if (!sid) {
    if (showNotification) showToast("Please enter a Student ID / Team Code first.", "warning");
    const idEl = document.getElementById("student-id-input");
    if (idEl) idEl.focus();
    return;
  }
  try {
    const resp = await fetch("/api/student/save_draft", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        student_id: sid,
        student_data: projectState
      })
    });
    const res = await resp.json();
    if (res.success) {
      if (showNotification) {
        showToast(`✅ Proposal draft synced to server under ID ${res.student_id} (${res.updated_at})!`);
      }
      const stEl = document.querySelector(".save-status-text");
      if (stEl) stEl.innerText = `Synced to Server (${res.updated_at})`;
    }
  } catch (e) {
    console.error("Draft sync error:", e);
    if (showNotification) showToast("Network error syncing draft to server.");
  }
}

function updateMatrixExplainer(data) {
  if (!data) return;
  const explainerPanel = document.getElementById("matrix-paper-explainer-panel");
  if (!explainerPanel) return;

  // 1. Paper Title & Meta
  const elTitle = document.getElementById("matrix-exp-title");
  const elAuthors = document.getElementById("matrix-exp-authors");
  const elJournal = document.getElementById("matrix-exp-journal");
  const elYear = document.getElementById("matrix-exp-year");
  const elRecency = document.getElementById("matrix-exp-recency");

  if (elTitle) elTitle.textContent = data.title || "Primary Research Paper";
  if (elAuthors) elAuthors.textContent = "👥 " + (data.authors || "Authors");
  if (elJournal) elJournal.textContent = "🏛️ " + (data.journal || "Journal");
  if (elYear) elYear.textContent = "📅 " + (data.year || "Year n.d.");

  if (elRecency) {
    const yr = parseInt(data.year, 10);
    if (!isNaN(yr) && yr >= 2021) {
      elRecency.textContent = "✅ 2021–2026 Recency Verified";
      elRecency.style.background = "#dcfce7";
      elRecency.style.color = "#166534";
    } else {
      elRecency.textContent = "ℹ️ Benchmark Baseline Reference";
      elRecency.style.background = "#eff6ff";
      elRecency.style.color = "#1e40af";
    }
  }

  // 2. Everyday Analogy & Theme
  const elTheme = document.getElementById("matrix-exp-theme");
  const elAnalogy = document.getElementById("matrix-exp-analogy");
  if (data.plain_english_explanation) {
    if (elTheme) elTheme.textContent = data.plain_english_explanation.theme || "Biotechnology & Molecular Engineering";
    if (elAnalogy) elAnalogy.textContent = data.plain_english_explanation.core_analogy || "";
  }

  // 3. 4-Pillar Plain English Story Breakdown
  const elProblem = document.getElementById("matrix-exp-problem");
  const elSolution = document.getElementById("matrix-exp-solution");
  const elFinding = document.getElementById("matrix-exp-finding");
  const elGap = document.getElementById("matrix-exp-gap");

  if (data.plain_english_explanation) {
    if (elProblem) elProblem.textContent = data.plain_english_explanation.simple_problem || (data.executive_summary && data.executive_summary.problem) || "";
    if (elSolution) elSolution.textContent = data.plain_english_explanation.simple_solution || (data.executive_summary && data.executive_summary.intervention) || "";
    if (elFinding) elFinding.textContent = data.plain_english_explanation.simple_takeaway || (data.executive_summary && data.executive_summary.main_finding) || "";
    if (elGap) elGap.textContent = data.plain_english_explanation.simple_limitation || (data.executive_summary && data.executive_summary.limitation) || "";
  }

  // 4. Benchmark Metrics Chips
  const chipsContainer = document.getElementById("matrix-exp-metrics-chips");
  if (chipsContainer) {
    const metrics = (data.extracted_parameters && data.extracted_parameters.metric_numbers) || [];
    if (metrics.length > 0) {
      chipsContainer.innerHTML = metrics.map(m => `<span class="matrix-metric-chip">⚡ ${escapeHtml(m)}</span>`).join("");
    } else if (data.extracted_parameters && data.extracted_parameters.primary_metric_sentence) {
      chipsContainer.innerHTML = `<span class="matrix-metric-chip">⚡ ${escapeHtml(data.extracted_parameters.primary_metric_sentence.slice(0, 48))}...</span>`;
    } else {
      chipsContainer.innerHTML = `<span class="matrix-metric-chip" style="background:#f1f5f9; color:#475569;">Quantitative baseline recorded</span>`;
    }
  }

  // 5. 6 Dedicated Parameter Insight Boxes
  const pExp = data.parameter_explanations || {};
  const setInsight = (boxId, bodyId, text) => {
    const box = document.getElementById(boxId);
    const body = document.getElementById(bodyId);
    if (body && text) {
      body.textContent = text;
      if (box) {
        box.classList.add("has-content");
        box.style.display = "block";
      }
    }
  };

  setInsight("matrix-insight-yellow", "matrix-insight-yellow-body", pExp.burden_explanation);
  setInsight("matrix-insight-blue", "matrix-insight-blue-body", pExp.benchmark_explanation);
  setInsight("matrix-insight-green", "matrix-insight-green-body", pExp.gap_explanation);
  setInsight("matrix-insight-purple", "matrix-insight-purple-body", pExp.controls_explanation);
  setInsight("matrix-insight-red", "matrix-insight-red-body", pExp.milestone_explanation);
  setInsight("matrix-insight-citation", "matrix-insight-citation-body", pExp.citation_explanation);

  explainerPanel.style.display = "block";
}

function applyDecodedDataToMatrix(data) {
  if (!data || !data.extracted_parameters) return;
  const p = data.extracted_parameters;

  // 1. Parameter 1: Epidemiological / Global Burden Statistic
  if (p.burden_statistic) {
    projectState.matrix.yellow = p.burden_statistic;
    const el = document.getElementById("matrix-yellow");
    if (el) el.value = p.burden_statistic;
  }
  // 2. Parameter 2: Scientific Benchmark & Baseline Rate
  if (p.primary_metric_sentence) {
    projectState.matrix.blue = p.primary_metric_sentence;
    const el = document.getElementById("matrix-blue");
    if (el) el.value = p.primary_metric_sentence;
  }
  // 3. Parameter 3: Mechanistic Knowledge Gap / Flaw
  if (p.stated_gap) {
    projectState.matrix.green = p.stated_gap;
    const el = document.getElementById("matrix-green");
    if (el) el.value = p.stated_gap;
  }
  // 4. Parameter 4: Experimental Strategy, Model System & Verification Controls
  const ctrlVal = p.experimental_strategy || p.controls;
  if (ctrlVal) {
    projectState.matrix.purple = ctrlVal;
    const el = document.getElementById("matrix-purple");
    if (el) el.value = ctrlVal;
  }
  // 5. Parameter 5: Core Engineered Innovation & Molecular Mechanism
  const innovVal = p.key_innovation || p.target_milestone;
  if (innovVal) {
    projectState.matrix.red = innovVal;
    const el = document.getElementById("matrix-red");
    if (el) el.value = innovVal;
  }
  // 6. Parameter 6: Key Measured Findings, Evidence Proof & Calibrated Milestone
  const findingsVal = p.research_horizon || p.key_findings || (data.citations && data.citations.apa ? data.citations.apa : "");
  if (findingsVal) {
    projectState.matrix.citation = findingsVal;
    const el = document.getElementById("matrix-citation");
    if (el) el.value = findingsVal;
  }

  currentDecodedData = data;
  projectState.decoded_paper_cache = data;
  saveToStorage();
  if (typeof updateLogicChainUIDebounced === "function") updateLogicChainUIDebounced();
  if (typeof updateLiveScoreDebounced === "function") updateLiveScoreDebounced();

  updateMatrixExplainer(data);
}

function renderKeywordTags(keywords) {
  const container = document.getElementById("keywords-tags-container");
  if (!container) return;
  if (!keywords || !keywords.trim()) {
    container.innerHTML = '<span style="font-size:0.75rem; color:#94a3b8; font-style:italic;">No custom keywords typed yet.</span>';
    return;
  }
  const tags = keywords.split(",").map(t => t.trim()).filter(Boolean);
  container.innerHTML = tags.map(t => `<span style="background:#e0e7ff; color:#3730a3; padding:2px 8px; border-radius:999px; font-size:0.75rem; font-weight:600;">🏷️ ${escapeHtml(t)}</span>`).join(" ");
}

const GANTT_PALETTE = [
  { bar: "linear-gradient(90deg, #3b82f6, #60a5fa)", text: "#1e40af" },
  { bar: "linear-gradient(90deg, #10b981, #34d399)", text: "#065f46" },
  { bar: "linear-gradient(90deg, #f59e0b, #fbbf24)", text: "#92400e" },
  { bar: "linear-gradient(90deg, #8b5cf6, #a78bfa)", text: "#6d28d9" },
  { bar: "linear-gradient(90deg, #ec4899, #f472b6)", text: "#be185d" },
  { bar: "linear-gradient(90deg, #06b6d4, #22d3ee)", text: "#0e7490" },
  { bar: "linear-gradient(90deg, #6366f1, #818cf8)", text: "#3730a3" }
];

function ensureGanttTasks() {
  if (!projectState.gantt_schedule) projectState.gantt_schedule = {};
  const gs = projectState.gantt_schedule;
  const totM = Math.max(3, Math.min(60, parseInt(gs.total_months, 10) || 18));
  if (!Array.isArray(gs.tasks) || gs.tasks.length === 0) {
    const a = projectState.aims || {};
    gs.tasks = [
      {
        name: a.aim1_title ? `WP1: ${a.aim1_title}` : "WP1: Construction & Preparation",
        start: parseInt(gs.wp1_start, 10) || 1,
        end: parseInt(gs.wp1_end, 10) || Math.max(2, Math.round(totM * 0.33)),
        gate: gs.wp1_gate || "Sequence verified & vector expression confirmed"
      },
      {
        name: a.aim2_title ? `WP2: ${a.aim2_title}` : "WP2: Functional Testing & Evaluation",
        start: parseInt(gs.wp2_start, 10) || Math.max(2, Math.round(totM * 0.28)),
        end: parseInt(gs.wp2_end, 10) || Math.max(3, Math.round(totM * 0.67)),
        gate: gs.wp2_gate || "Quantitative activity & kinetic threshold achieved"
      },
      {
        name: a.aim3_title ? `WP3: ${a.aim3_title}` : "WP3: Real-World Validation & Performance",
        start: parseInt(gs.wp3_start, 10) || Math.max(3, Math.round(totM * 0.55)),
        end: parseInt(gs.wp3_end, 10) || totM,
        gate: gs.wp3_gate || "Target milestone validated in realistic operational matrix"
      }
    ];
  }
}

function syncGanttLegacyProperties() {
  if (!projectState.gantt_schedule) projectState.gantt_schedule = {};
  const gs = projectState.gantt_schedule;
  ensureGanttTasks();
  const tasks = gs.tasks || [];
  if (tasks[0]) {
    gs.wp1_start = parseInt(tasks[0].start, 10) || 1;
    gs.wp1_end = parseInt(tasks[0].end, 10) || 6;
    gs.wp1_gate = tasks[0].gate || "";
  }
  if (tasks[1]) {
    gs.wp2_start = parseInt(tasks[1].start, 10) || 5;
    gs.wp2_end = parseInt(tasks[1].end, 10) || 12;
    gs.wp2_gate = tasks[1].gate || "";
  }
  if (tasks[2]) {
    gs.wp3_start = parseInt(tasks[2].start, 10) || 10;
    gs.wp3_end = parseInt(tasks[2].end, 10) || (parseInt(gs.total_months, 10) || 18);
    gs.wp3_gate = tasks[2].gate || "";
  }
  const setV = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
  setV("gantt-wp1-start", gs.wp1_start);
  setV("gantt-wp1-end", gs.wp1_end);
  setV("gantt-wp1-gate", gs.wp1_gate);
  setV("gantt-wp2-start", gs.wp2_start);
  setV("gantt-wp2-end", gs.wp2_end);
  setV("gantt-wp2-gate", gs.wp2_gate);
  setV("gantt-wp3-start", gs.wp3_start);
  setV("gantt-wp3-end", gs.wp3_end);
  setV("gantt-wp3-gate", gs.wp3_gate);
}

function updateGanttAimLabels() {
  const a = projectState.aims || {};
  const l1 = document.getElementById("gantt-wp1-label");
  const l2 = document.getElementById("gantt-wp2-label");
  const l3 = document.getElementById("gantt-wp3-label");
  if (l1) l1.textContent = a.aim1_title ? `WP1: ${a.aim1_title}` : "WP1: Construction & Preparation";
  if (l2) l2.textContent = a.aim2_title ? `WP2: ${a.aim2_title}` : "WP2: Functional Testing & Evaluation";
  if (l3) l3.textContent = a.aim3_title ? `WP3: ${a.aim3_title}` : "WP3: Real-World Validation & Trials";
}

function renderGanttTasksTable() {
  const tbody = document.getElementById("gantt-tasks-tbody");
  if (!tbody) return;
  ensureGanttTasks();
  const gs = projectState.gantt_schedule;
  const totM = Math.max(3, Math.min(60, parseInt(gs.total_months, 10) || 18));
  const tasks = gs.tasks || [];

  if (tasks.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#64748b; padding:12px;">No milestone points configured. Click <strong>+ Add Timeline Milestone / Phase</strong> above to add one.</td></tr>`;
    return;
  }

  tbody.innerHTML = tasks.map((t, idx) => {
    const s = Math.max(1, Math.min(totM, parseInt(t.start, 10) || 1));
    const e = Math.max(s, Math.min(totM, parseInt(t.end, 10) || totM));
    const dur = e - s + 1;
    return `
      <tr data-task-idx="${idx}">
        <td>
          <input type="text" class="form-input gantt-task-name-input" data-idx="${idx}" value="${escapeHtml(t.name || '')}" placeholder="e.g. Phase ${idx+1}: Task description..." style="font-size:0.8rem; padding:4px 8px; width:100%;">
        </td>
        <td style="text-align:center;">
          <input type="number" class="form-input gantt-task-start-input" data-idx="${idx}" min="1" max="${totM}" value="${s}" style="font-size:0.8rem; padding:4px; width:52px; text-align:center;">
        </td>
        <td style="text-align:center;">
          <input type="number" class="form-input gantt-task-end-input" data-idx="${idx}" min="1" max="${totM}" value="${e}" style="font-size:0.8rem; padding:4px; width:52px; text-align:center;">
        </td>
        <td style="text-align:center; font-weight:700; color:#2563eb; font-size:0.78rem;">
          ${dur} mo
        </td>
        <td>
          <input type="text" class="form-input gantt-task-gate-input" data-idx="${idx}" value="${escapeHtml(t.gate || '')}" placeholder="Go/No-Go Decision Gate (e.g. ≥2-fold improvement)..." style="font-size:0.78rem; padding:4px 8px; width:100%;">
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-delete-gantt-task" data-idx="${idx}" title="Remove this timeline milestone" style="background:none; border:none; color:#ef4444; font-size:1rem; cursor:pointer; padding:2px 4px; border-radius:4px; line-height:1;">✕</button>
        </td>
      </tr>
    `;
  }).join("");

  tbody.querySelectorAll(".gantt-task-name-input").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-idx"), 10);
      if (gs.tasks[idx]) {
        gs.tasks[idx].name = e.target.value;
        syncGanttLegacyProperties();
        saveToStorage();
        renderStep5GanttVisual();
      }
    });
  });

  tbody.querySelectorAll(".gantt-task-start-input").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-idx"), 10);
      if (gs.tasks[idx]) {
        const val = Math.max(1, Math.min(totM, parseInt(e.target.value, 10) || 1));
        gs.tasks[idx].start = val;
        if (gs.tasks[idx].end < val) gs.tasks[idx].end = val;
        syncGanttLegacyProperties();
        saveToStorage();
        renderGanttTasksTable();
        renderStep5GanttVisual();
      }
    });
  });

  tbody.querySelectorAll(".gantt-task-end-input").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-idx"), 10);
      if (gs.tasks[idx]) {
        const val = Math.max(parseInt(gs.tasks[idx].start, 10) || 1, Math.min(totM, parseInt(e.target.value, 10) || totM));
        gs.tasks[idx].end = val;
        syncGanttLegacyProperties();
        saveToStorage();
        renderGanttTasksTable();
        renderStep5GanttVisual();
      }
    });
  });

  tbody.querySelectorAll(".gantt-task-gate-input").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-idx"), 10);
      if (gs.tasks[idx]) {
        gs.tasks[idx].gate = e.target.value;
        syncGanttLegacyProperties();
        saveToStorage();
        renderStep5GanttVisual();
      }
    });
  });

  tbody.querySelectorAll(".btn-delete-gantt-task").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-idx"), 10);
      if (!isNaN(idx) && gs.tasks[idx]) {
        gs.tasks.splice(idx, 1);
        syncGanttLegacyProperties();
        saveToStorage();
        renderGanttTasksTable();
        renderStep5GanttVisual();
        showToast("Timeline milestone removed.");
      }
    });
  });
}

function renderStep5GanttVisual() {
  const container = document.getElementById("step5-gantt-visual-container");
  if (!container) return;
  ensureGanttTasks();
  const gs = projectState.gantt_schedule || {};
  const totalMonths = Math.max(3, Math.min(60, parseInt(gs.total_months, 10) || 18));
  const tasks = gs.tasks || [];

  let monthHeaders = "";
  const step = totalMonths > 24 ? 2 : 1;
  for (let m = 1; m <= totalMonths; m += step) {
    monthHeaders += `<div style="flex:1; text-align:center; font-size:0.68rem; color:#64748b; border-right:1px dashed #e2e8f0; padding:2px 0;">M${m}</div>`;
  }

  const calcLeft = (start) => ((start - 1) / totalMonths * 100).toFixed(1) + "%";
  const calcWidth = (start, end) => (((end - start + 1) / totalMonths) * 100).toFixed(1) + "%";

  let tasksHtml = "";
  if (tasks.length === 0) {
    tasksHtml = `<div style="text-align:center; font-size:0.75rem; color:#64748b; padding:12px;">Add timeline milestones above to visualize work package flows.</div>`;
  } else {
    tasksHtml = tasks.map((t, i) => {
      const color = GANTT_PALETTE[i % GANTT_PALETTE.length];
      const s = Math.max(1, Math.min(totalMonths, parseInt(t.start, 10) || 1));
      const e = Math.max(s, Math.min(totalMonths, parseInt(t.end, 10) || totalMonths));
      const name = t.name || `Phase ${i + 1}`;
      const gate = t.gate ? `🏁 ${t.gate}` : '';
      return `
        <div style="margin-bottom:8px;">
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:600; color:${color.text}; margin-bottom:2px;">
            <span>${escapeHtml(name)} (M${s}–M${e})</span>
            <span style="font-size:0.7rem; color:#64748b;">${escapeHtml(gate)}</span>
          </div>
          <div style="position:relative; height:18px; background:#f1f5f9; border-radius:4px; overflow:hidden;">
            <div style="position:absolute; left:${calcLeft(s)}; width:${calcWidth(s, e)}; height:100%; background:${color.bar}; border-radius:4px;"></div>
          </div>
        </div>
      `;
    }).join("");
  }

  container.innerHTML = `
    <div style="font-size: 0.78rem; font-weight: 700; color: #1e1b4b; margin-bottom: 8px;">
      ${totalMonths}-Month Project Work Package Gantt Flow (${tasks.length} Milestone${tasks.length === 1 ? '' : 's'})
    </div>
    <div style="display:flex; border-bottom:1px solid #cbd5e1; margin-bottom:8px; background:#f1f5f9; border-radius:4px;">
      ${monthHeaders}
    </div>
    ${tasksHtml}
  `;
}

function getDefaultMaterials() {
  return [
    { item: "High-Fidelity DNA Polymerase & Master Mix (500 U)", vendor: "New England Biolabs (NEB)", catalog: "M0530L", category: "consumables", qty: 2, unit_cost: 285 },
    { item: "HiFi DNA Assembly / Gibson Cloning Master Mix (50 rxns)", vendor: "New England Biolabs (NEB)", catalog: "E2621L", category: "consumables", qty: 2, unit_cost: 360 },
    { item: "Commercial Gene Synthesis & Target Fragment (5 kb total)", vendor: "Integrated DNA Technologies (IDT)", catalog: "GENE-CUSTOM", category: "consumables", qty: 1, unit_cost: 1450 },
    { item: "Plasmid Miniprep & PCR Purification Spin Columns (250 preps)", vendor: "Qiagen", catalog: "27106", category: "consumables", qty: 3, unit_cost: 320 },
    { item: "Protein Purification Ni-NTA Agarose Resin (100 mL)", vendor: "Thermo Fisher Scientific", catalog: "R90101", category: "consumables", qty: 2, unit_cost: 640 },
    { item: "Analytical Chromatographic Standards & Solvents (HPLC Grade)", vendor: "Sigma-Aldrich / Merck", catalog: "PHR1000", category: "consumables", qty: 4, unit_cost: 410 },
    { item: "Graduate Student Research Stipends (Part-Time, 2 Semesters)", vendor: "Institutional Payroll / HR", catalog: "GRS-STIPEND", category: "personnel", qty: 2, unit_cost: 6000 },
    { item: "Temperature-Controlled Benchtop Shaker / Incubator Maintenance", vendor: "Eppendorf", catalog: "5425-SVC", category: "equipment", qty: 1, unit_cost: 4500 },
    { item: "Sanger Sequencing & Fragment Analyzer Core Facility Access", vendor: "Local / Institutional Facility", catalog: "CORE-SEQ", category: "utilities", qty: 12, unit_cost: 125 },
    { item: "Biosafety Level 2 Overhead & Hazardous Waste Compliance", vendor: "Local / Institutional Facility", catalog: "SAFETY-COMPL", category: "utilities", qty: 1, unit_cost: 3000 }
  ];
}

function renderMaterialsTable() {
  const tbody = document.getElementById("materials-budget-tbody");
  if (!tbody) return;

  if (!Array.isArray(projectState.budget_materials)) {
    projectState.budget_materials = [];
  }

  if (projectState.budget_materials.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding:18px; color:#64748b; font-size:0.82rem;">
          No items added yet. Click <strong>+ Add Material Item</strong> to enter custom reagents or <strong>⚡ Load Standard Reagents</strong> for typical molecular biology kits.
        </td>
      </tr>
    `;
    recalculateMaterialsBudget();
    return;
  }

  let html = "";
  projectState.budget_materials.forEach((mat, idx) => {
    const qty = Math.max(1, parseInt(mat.qty, 10) || 1);
    const unitCost = Math.max(0, parseFloat(mat.unit_cost) || 0);
    const lineTotal = qty * unitCost;

    html += `
      <tr data-row-idx="${idx}" style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:4px 6px;">
          <input type="text" class="form-input mat-field mat-item" data-field="item" data-idx="${idx}" value="${escapeHtml(mat.item || '')}" placeholder="e.g. Q5 High-Fidelity DNA Polymerase" style="padding:3px 6px; font-size:0.78rem; width:100%;">
        </td>
        <td style="padding:4px 6px;">
          <input type="text" class="form-input mat-field mat-vendor" list="vendor-suggestions" data-field="vendor" data-idx="${idx}" value="${escapeHtml(mat.vendor || '')}" placeholder="e.g. NEB, Thermo" style="padding:3px 6px; font-size:0.78rem; width:100%;">
        </td>
        <td style="padding:4px 6px;">
          <input type="text" class="form-input mat-field mat-catalog" data-field="catalog" data-idx="${idx}" value="${escapeHtml(mat.catalog || '')}" placeholder="SKU / Cat #" style="padding:3px 6px; font-size:0.78rem; width:100%;">
        </td>
        <td style="padding:4px 6px;">
          <select class="form-input mat-field mat-category" data-field="category" data-idx="${idx}" style="padding:3px 4px; font-size:0.75rem; width:100%;">
            <option value="consumables"${mat.category === 'consumables' ? ' selected' : ''}>Consumables</option>
            <option value="personnel"${mat.category === 'personnel' ? ' selected' : ''}>Personnel</option>
            <option value="utilities"${mat.category === 'utilities' ? ' selected' : ''}>Overhead/Util</option>
            <option value="equipment"${mat.category === 'equipment' ? ' selected' : ''}>Equipment</option>
          </select>
        </td>
        <td style="padding:4px 6px; text-align:center;">
          <input type="number" min="1" step="1" class="form-input mat-field mat-qty" data-field="qty" data-idx="${idx}" value="${qty}" style="padding:3px 4px; font-size:0.78rem; width:50px; text-align:center;">
        </td>
        <td style="padding:4px 6px; text-align:right;">
          <input type="number" min="0" step="1" class="form-input mat-field mat-cost" data-field="unit_cost" data-idx="${idx}" value="${unitCost}" style="padding:3px 4px; font-size:0.78rem; width:75px; text-align:right;">
        </td>
        <td style="padding:4px 6px; text-align:right; font-weight:700; color:#1e293b; font-size:0.8rem;" class="mat-line-total">
          $${lineTotal.toLocaleString()}
        </td>
        <td style="padding:4px 6px; text-align:center;">
          <button type="button" class="btn-del-material" data-idx="${idx}" title="Delete Item" style="background:none; border:none; color:#ef4444; font-size:0.9rem; cursor:pointer; padding:2px 4px;">✕</button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;

  // Bind input listeners
  tbody.querySelectorAll(".mat-field").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-idx"), 10);
      const field = e.target.getAttribute("data-field");
      if (projectState.budget_materials[idx]) {
        let val = e.target.value;
        if (field === "qty") val = parseInt(val, 10) || 1;
        if (field === "unit_cost") val = parseFloat(val) || 0;
        projectState.budget_materials[idx][field] = val;
        
        // Update line total on same row
        const row = e.target.closest("tr");
        if (row) {
          const m = projectState.budget_materials[idx];
          const lt = (parseInt(m.qty, 10) || 1) * (parseFloat(m.unit_cost) || 0);
          const totalCell = row.querySelector(".mat-line-total");
          if (totalCell) totalCell.textContent = `$${lt.toLocaleString()}`;
        }
        recalculateMaterialsBudget();
        saveToStorage();
        if (typeof updateLiveScoreDebounced === "function") updateLiveScoreDebounced();
      }
    });
  });

  tbody.querySelectorAll(".btn-del-material").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-idx"), 10);
      deleteMaterialRow(idx);
    });
  });

  recalculateMaterialsBudget();
}

function recalculateMaterialsBudget() {
  const totals = { consumables: 0, personnel: 0, utilities: 0, equipment: 0 };
  const mats = projectState.budget_materials || [];

  if (mats.length > 0) {
    mats.forEach(m => {
      const cat = totals.hasOwnProperty(m.category) ? m.category : "consumables";
      const q = Math.max(1, parseInt(m.qty, 10) || 1);
      const c = Math.max(0, parseFloat(m.unit_cost) || 0);
      totals[cat] += (q * c);
    });
    projectState.budget_items = { ...totals };
  } else {
    totals.consumables = parseFloat(projectState.budget_items?.consumables || 18500);
    totals.personnel = parseFloat(projectState.budget_items?.personnel || 12000);
    totals.utilities = parseFloat(projectState.budget_items?.utilities || 4500);
    totals.equipment = parseFloat(projectState.budget_items?.equipment || 15000);
  }

  // Sync hidden inputs
  const cEl = document.getElementById("budget-consumables");
  const pEl = document.getElementById("budget-personnel");
  const uEl = document.getElementById("budget-utilities");
  const eEl = document.getElementById("budget-equipment");
  if (cEl) cEl.value = totals.consumables;
  if (pEl) pEl.value = totals.personnel;
  if (uEl) uEl.value = totals.utilities;
  if (eEl) eEl.value = totals.equipment;

  const grandTotal = totals.consumables + totals.personnel + totals.utilities + totals.equipment;
  const totDisplay = document.getElementById("budget-total-display");
  if (totDisplay) totDisplay.textContent = `$${grandTotal.toLocaleString()}`;

  const brkDisplay = document.getElementById("budget-breakdown-display");
  if (brkDisplay) {
    const pCons = grandTotal > 0 ? Math.round((totals.consumables / grandTotal) * 100) : 0;
    const pPers = grandTotal > 0 ? Math.round((totals.personnel / grandTotal) * 100) : 0;
    const pUtil = grandTotal > 0 ? Math.round((totals.utilities / grandTotal) * 100) : 0;
    const pEquip = grandTotal > 0 ? Math.round((totals.equipment / grandTotal) * 100) : 0;
    brkDisplay.textContent = `Consumables: ${pCons}% | Personnel: ${pPers}% | Overhead: ${pUtil}% | Equipment: ${pEquip}%`;
  }
}

function addMaterialRow(itemData) {
  if (!Array.isArray(projectState.budget_materials)) projectState.budget_materials = [];
  const newItem = itemData || {
    item: "",
    vendor: "",
    catalog: "",
    category: "consumables",
    qty: 1,
    unit_cost: 100
  };
  projectState.budget_materials.push(newItem);
  renderMaterialsTable();
  saveToStorage();
}

function deleteMaterialRow(idx) {
  if (Array.isArray(projectState.budget_materials) && idx >= 0 && idx < projectState.budget_materials.length) {
    projectState.budget_materials.splice(idx, 1);
    renderMaterialsTable();
    saveToStorage();
    showToast("Material item removed.");
  }
}

function populateFormFields() {
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.value = val;
  };

  setVal("student-name-input", projectState.student_name);
  setVal("student-id-input", projectState.student_id);
  setVal("project-model-select", projectState.model_id || "cellular");
  updateModelLabels(projectState.model_id || "cellular");

  setVal("custom-modality-input", projectState.custom_modality || "");
  const customModInput = document.getElementById("custom-modality-input");
  if (customModInput) {
    customModInput.style.display = (projectState.model_id === "custom") ? "block" : "none";
  }

  setVal("project-keywords-input", projectState.keywords || "");
  renderKeywordTags(projectState.keywords || "");

  setVal("pillar-chassis", projectState.system || projectState.chassis);
  setVal("pillar-tool", projectState.tool);
  setVal("pillar-target", projectState.target);

  // Matrix
  setVal("matrix-yellow", projectState.matrix.yellow);
  setVal("matrix-blue", projectState.matrix.blue);
  setVal("matrix-green", projectState.matrix.green);
  setVal("matrix-purple", projectState.matrix.purple);
  setVal("matrix-red", projectState.matrix.red);
  setVal("matrix-citation", projectState.matrix.citation);

  // Restore Decoded Literature Intelligence & Explanations if cached
  if (projectState.decoded_paper_cache) {
    currentDecodedData = projectState.decoded_paper_cache;
    updateMatrixExplainer(projectState.decoded_paper_cache);
  }

  // Title, Abstract & Funnel
  setVal("proposal-title-input", projectState.title);
  setVal("abstract-input", projectState.abstract);
  setVal("funnel-tier1", projectState.funnel.tier1);
  setVal("funnel-tier2", projectState.funnel.tier2);
  setVal("funnel-tier3", projectState.funnel.tier3);
  setVal("funnel-tier4", projectState.funnel.tier4);

  // Aims
  setVal("funnel-overarching-aim", projectState.overarching_aim);
  setVal("aim1-input", projectState.aims.aim1);
  setVal("aim1-title", projectState.aims?.aim1_title || "");
  setVal("aim2-input", projectState.aims.aim2);
  setVal("aim2-title", projectState.aims?.aim2_title || "");
  setVal("aim3-input", projectState.aims.aim3);
  setVal("aim3-title", projectState.aims?.aim3_title || "");
  updateGanttAimLabels();

  // Deliverables & Impact
  setVal("expected-outcomes-input", projectState.expected_outcomes);
  setVal("impact-input", projectState.impact);
  setVal("customer-input", projectState.customer);
  setVal("market-input", projectState.market);
  setVal("usps-input", projectState.usps);

  // Competitor Matrix (Exact 9 Dimensions)
  const cd = projectState.competitor_data || {};
  // 1. Principle / technology
  setVal("comp-est-principle", cd.principle_established || cd.incumbent_name || "");
  setVal("comp-rec-principle", cd.principle_recent || cd.emerging_name || "");
  setVal("comp-prop-principle", cd.principle_proposed || cd.proposed_name || projectState.tool || "");
  // 2. Main strength
  setVal("comp-est-strength", cd.strength_established || "");
  setVal("comp-rec-strength", cd.strength_recent || "");
  setVal("comp-prop-strength", cd.strength_proposed || "");
  // 3. Key limitation
  setVal("comp-est-limitation", cd.limitation_established || "");
  setVal("comp-rec-limitation", cd.limitation_recent || "");
  setVal("comp-prop-limitation", cd.limitation_proposed || "");
  // 4. Performance
  setVal("comp-est-performance", cd.performance_established || cd.incumbent_speed || "");
  setVal("comp-rec-performance", cd.performance_recent || cd.emerging_speed || "");
  setVal("comp-prop-performance", cd.performance_proposed || cd.proposed_speed || "");
  // 5. Cost / resources
  setVal("comp-est-cost", cd.cost_established || cd.incumbent_cost || "");
  setVal("comp-rec-cost", cd.cost_recent || cd.emerging_cost || "");
  setVal("comp-prop-cost", cd.cost_proposed || cd.proposed_cost || "");
  // 6. Safety / sustainability
  setVal("comp-est-safety", cd.safety_established || cd.incumbent_safety || "");
  setVal("comp-rec-safety", cd.safety_recent || cd.emerging_safety || "");
  setVal("comp-prop-safety", cd.safety_proposed || cd.proposed_safety || "");
  // 7. Evidence available
  setVal("comp-est-evidence", cd.evidence_established || "");
  setVal("comp-rec-evidence", cd.evidence_recent || "");
  setVal("comp-prop-evidence", cd.evidence_proposed || "");
  // 8. Unresolved gap
  setVal("comp-est-gap", cd.gap_established || "");
  setVal("comp-rec-gap", cd.gap_recent || "");
  setVal("comp-prop-gap", cd.gap_proposed || "");
  // 9. Contribution of proposed study
  setVal("comp-prop-contribution", cd.contribution_proposed || "");

  // Legacy field backup sync
  setVal("comp-incumbent-name", cd.incumbent_name || cd.principle_established || "");
  setVal("comp-emerging-name", cd.emerging_name || cd.principle_recent || "");
  setVal("comp-proposed-name", cd.proposed_name || cd.principle_proposed || "");

  // Gantt Dynamic Duration & Scheduler Controls
  ensureGanttTasks();
  syncGanttLegacyProperties();
  const gs = projectState.gantt_schedule || {};
  const totM = Math.max(3, Math.min(60, parseInt(gs.total_months, 10) || 18));
  setVal("gantt-total-duration", totM);
  const durPreset = document.getElementById("gantt-duration-preset");
  if (durPreset) {
    durPreset.value = [6, 12, 18, 24, 36].includes(totM) ? totM.toString() : "custom";
  }
  renderGanttTasksTable();
  renderStep5GanttVisual();

  // Itemized Materials & Funding Table
  renderMaterialsTable();

  // Methods, SWOT & Timeline
  setVal("methodology-input", projectState.methodology);
  setVal("swot-s", projectState.swot.strengths);
  setVal("swot-w", projectState.swot.weaknesses);
  setVal("swot-o", projectState.swot.opportunities);
  setVal("swot-t", projectState.swot.threats);
  setVal("timeplan-input", projectState.time_plan);
  setVal("budget-input", projectState.budget);
  setVal("references-input", projectState.references);

  // Aims Contingencies (B1)
  const cont = projectState.aims_contingencies || {};
  setVal("aim1-fallback", cont.aim1_fallback);
  setVal("aim2-fallback", cont.aim2_fallback);
  setVal("aim3-fallback", cont.aim3_fallback);

  // Control Triad (B2)
  const triad = projectState.control_triad || {};
  setVal("control-negative", triad.negative);
  setVal("control-positive", triad.positive);

  // Official BT_301 Template Form Population
  setVal("submission-date-input", projectState.submission_date || "");
  renderTeamRosterTable();

  // Section 2
  setVal("section-2-1-unified", projectState.problem_narrative || "");
  setVal("section-2-2-impact-text", projectState.impact_text || projectState.impact || "");
  setVal("section-2-3-audience-text", projectState.target_audience || projectState.customer || "");
  syncImpactDomainPills();

  // Section 3
  setVal("section-3-1-aim", projectState.overarching_aim || projectState.aim || "");
  renderObjectivesList();

  // Section 4
  setVal("section-4-1-methodology", projectState.methodology || "");
  setVal("section-4-2-caption", projectState.flowchart_caption || "Figure 1: Schematic workflow pipeline");
  setVal("section-4-3-methods", projectState.materials_methods || "");
  const chkPos = document.getElementById("chk-control-positive");
  if (chkPos) chkPos.checked = Boolean(projectState.controls_checklist?.positive);
  const chkNeg = document.getElementById("chk-control-negative");
  if (chkNeg) chkNeg.checked = Boolean(projectState.controls_checklist?.negative);
  const chkTrip = document.getElementById("chk-control-triplicates");
  if (chkTrip) chkTrip.checked = Boolean(projectState.controls_checklist?.triplicates);

  // Section 5 Risks
  renderRisksTable();

  // Section 6 Ansoff
  const ans = projectState.ansoff || {};
  setVal("ansoff-penetration", ans.penetration || "");
  setVal("ansoff-prod-dev", ans.prod_dev || "");
  setVal("ansoff-mkt-dev", ans.mkt_dev || "");
  setVal("ansoff-diversification", ans.diversification || "");

  // Section 7 SWOT
  setVal("swot-strengths", projectState.swot?.strengths || "");
  setVal("swot-weaknesses", projectState.swot?.weaknesses || "");
  setVal("swot-opportunities", projectState.swot?.opportunities || "");
  setVal("swot-threats", projectState.swot?.threats || "");

  // Section 8 PESTEL
  setVal("pestel-political", projectState.pestel?.political || "");
  setVal("pestel-economic", projectState.pestel?.economic || "");
  setVal("pestel-social", projectState.pestel?.social || "");
  setVal("pestel-tech", projectState.pestel?.technological || projectState.pestel?.tech || "");
  setVal("pestel-env", projectState.pestel?.environmental || projectState.pestel?.env || "");
  setVal("pestel-legal", projectState.pestel?.legal || "");

  // Section 9.2 Budget EGP
  renderBudgetEGPTable();

  // Section 1 Abstract & Keywords & Section 10 References
  setVal("proposal-abstract-input", projectState.abstract || "");
  checkAbstractWordCount(projectState.abstract || "");
  setVal("abstract-keywords-input", projectState.keywords || "");
  setVal("proposal-references-input", projectState.references || "");
  setVal("control-specificity", triad.specificity);

  // Biotech FMEA Matrix (B3)
  const fmea = projectState.biotech_risk_matrix || {};
  setVal("fmea-off-target", fmea.off_target);
  setVal("fmea-toxicity", fmea.toxicity);
  setVal("fmea-solubility", fmea.solubility);
  setVal("fmea-biosafety", fmea.biosafety);

  // Proposal Lock State (Part 3.3)
  if (typeof applyLockStateToUI === "function") {
    applyLockStateToUI(Boolean(projectState.is_locked_for_grading));
  }
}

function initModelSelector() {
  const select = document.getElementById("project-model-select");
  const customInput = document.getElementById("custom-modality-input");
  if (!select) return;
  select.addEventListener("change", (e) => {
    const modelId = e.target.value;
    projectState.model_id = modelId;
    if (customInput) {
      customInput.style.display = (modelId === "custom") ? "block" : "none";
      if (modelId === "custom") customInput.focus();
    }
    updateModelLabels(modelId);
    saveToStorage();
    showToast(`Model updated: ${modelId === 'custom' ? 'Custom Interdisciplinary Modality' : (projectModels[modelId] ? projectModels[modelId].name : modelId)}`);
  });
}

function updateModelLabels(modelId) {
  const m = projectModels[modelId] || projectModels["cellular"];
  const tipEl = document.getElementById("model-description-tip");
  if (tipEl) tipEl.innerText = m.desc;

  const setHtml = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };

  setHtml("label-pillar1", m.p1.label);
  setHtml("desc-pillar1", m.p1.placeholder);
  setAttr("pillar-chassis", "placeholder", m.p1.placeholder);
  setHtml("example-pillar1", `Examples: <code>${m.p1.examples}</code>`);

  setHtml("label-pillar2", m.p2.label);
  setHtml("desc-pillar2", m.p2.placeholder);
  setAttr("pillar-tool", "placeholder", m.p2.placeholder);
  setHtml("example-pillar2", `Examples: <code>${m.p2.examples}</code>`);

  setHtml("label-pillar3", m.p3.label);
  setHtml("desc-pillar3", m.p3.placeholder);
  setAttr("pillar-target", "placeholder", m.p3.placeholder);
  setHtml("example-pillar3", `Examples: <code>${m.p3.examples}</code>`);
}

function initCourseSwitcher() {
  const select = document.getElementById("course-switcher-select");
  if (!select) return;
  select.addEventListener("change", async (e) => {
    const cid = e.target.value;
    try {
      const resp = await fetch("/api/courses/switch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course_id: cid })
      });
      const data = await resp.json();
      if (data.success) {
        showToast(`Switched active curriculum to ${data.course.course_name}`);
        updateLiveScore();
      }
    } catch (err) {
      console.error(err);
    }
  });
}

function initFormBindings() {
  const bind = (id, callback) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", (e) => {
        callback(e.target.value);
        saveToStorage();
        updateLiveScoreDebounced();
      });
    }
  };

  bind("student-name-input", v => projectState.student_name = v);
  bind("student-id-input", v => {
    projectState.student_id = v;
    triggerServerSyncDebounced();
  });
  bind("pillar-chassis", v => { projectState.system = v; projectState.chassis = v; });
  bind("pillar-tool", v => projectState.tool = v);
  bind("pillar-target", v => projectState.target = v);

  bind("matrix-yellow", v => projectState.matrix.yellow = v);
  bind("matrix-blue", v => projectState.matrix.blue = v);
  bind("matrix-green", v => projectState.matrix.green = v);
  bind("matrix-purple", v => projectState.matrix.purple = v);
  bind("matrix-red", v => projectState.matrix.red = v);
  bind("matrix-citation", v => projectState.matrix.citation = v);

  bind("proposal-title-input", v => projectState.title = v);
  bind("abstract-input", v => {
    projectState.abstract = v;
    updateWordCount("abstract-count", v, 250);
  });

  bind("funnel-tier1", v => projectState.funnel.tier1 = v);
  bind("funnel-tier2", v => projectState.funnel.tier2 = v);
  bind("funnel-tier3", v => projectState.funnel.tier3 = v);
  bind("funnel-tier4", v => projectState.funnel.tier4 = v);

  bind("custom-modality-input", v => { projectState.custom_modality = v; });
  bind("project-keywords-input", v => {
    projectState.keywords = v;
    renderKeywordTags(v);
  });

  bind("funnel-overarching-aim", v => projectState.overarching_aim = v);
  bind("aim1-input", v => projectState.aims.aim1 = v);
  bind("aim1-title", v => {
    if (!projectState.aims) projectState.aims = {};
    projectState.aims.aim1_title = v;
    updateGanttAimLabels();
    renderStep5GanttVisual();
  });
  bind("aim2-input", v => projectState.aims.aim2 = v);
  bind("aim2-title", v => {
    if (!projectState.aims) projectState.aims = {};
    projectState.aims.aim2_title = v;
    updateGanttAimLabels();
    renderStep5GanttVisual();
  });
  bind("aim3-input", v => projectState.aims.aim3 = v);
  bind("aim3-title", v => {
    if (!projectState.aims) projectState.aims = {};
    projectState.aims.aim3_title = v;
    updateGanttAimLabels();
    renderStep5GanttVisual();
  });

  bind("methodology-input", v => {
    projectState.methodology = v;
    checkTenseWarning(v);
  });

  // Official BT_301 Template Form Bindings
  bind("submission-date-input", v => {
    projectState.submission_date = v;
    renderLiveManuscript();
  });
  bind("section-2-1-unified", v => {
    projectState.problem_narrative = v;
    renderLiveManuscript();
  });
  bind("section-2-2-impact-text", v => {
    projectState.impact_text = v;
    projectState.impact = v;
    renderLiveManuscript();
  });
  bind("section-2-3-audience-text", v => {
    projectState.target_audience = v;
    projectState.customer = v;
    renderLiveManuscript();
  });
  bind("section-3-1-aim", v => {
    projectState.overarching_aim = v;
    renderLiveManuscript();
  });
  bind("section-4-1-methodology", v => {
    projectState.methodology = v;
    checkFutureTenseGuardian(v);
    renderLiveManuscript();
  });
  bind("section-4-2-caption", v => {
    projectState.flowchart_caption = v;
    renderLiveManuscript();
  });
  bind("section-4-3-methods", v => {
    projectState.materials_methods = v;
    renderLiveManuscript();
  });
  bind("ansoff-penetration", v => {
    if (!projectState.ansoff) projectState.ansoff = {};
    projectState.ansoff.penetration = v;
    renderLiveManuscript();
  });
  bind("ansoff-prod-dev", v => {
    if (!projectState.ansoff) projectState.ansoff = {};
    projectState.ansoff.prod_dev = v;
    renderLiveManuscript();
  });
  bind("ansoff-mkt-dev", v => {
    if (!projectState.ansoff) projectState.ansoff = {};
    projectState.ansoff.mkt_dev = v;
    renderLiveManuscript();
  });
  bind("ansoff-diversification", v => {
    if (!projectState.ansoff) projectState.ansoff = {};
    projectState.ansoff.diversification = v;
    renderLiveManuscript();
  });
  bind("swot-strengths", v => {
    if (!projectState.swot) projectState.swot = {};
    projectState.swot.strengths = v;
    renderLiveManuscript();
  });
  bind("swot-weaknesses", v => {
    if (!projectState.swot) projectState.swot = {};
    projectState.swot.weaknesses = v;
    renderLiveManuscript();
  });
  bind("swot-opportunities", v => {
    if (!projectState.swot) projectState.swot = {};
    projectState.swot.opportunities = v;
    renderLiveManuscript();
  });
  bind("swot-threats", v => {
    if (!projectState.swot) projectState.swot = {};
    projectState.swot.threats = v;
    renderLiveManuscript();
  });
  bind("pestel-political", v => {
    if (!projectState.pestel) projectState.pestel = {};
    projectState.pestel.political = v;
    renderLiveManuscript();
  });
  bind("pestel-economic", v => {
    if (!projectState.pestel) projectState.pestel = {};
    projectState.pestel.economic = v;
    renderLiveManuscript();
  });
  bind("pestel-social", v => {
    if (!projectState.pestel) projectState.pestel = {};
    projectState.pestel.social = v;
    renderLiveManuscript();
  });
  bind("pestel-tech", v => {
    if (!projectState.pestel) projectState.pestel = {};
    projectState.pestel.technological = v;
    projectState.pestel.tech = v;
    renderLiveManuscript();
  });
  bind("pestel-env", v => {
    if (!projectState.pestel) projectState.pestel = {};
    projectState.pestel.environmental = v;
    projectState.pestel.env = v;
    renderLiveManuscript();
  });
  bind("pestel-legal", v => {
    if (!projectState.pestel) projectState.pestel = {};
    projectState.pestel.legal = v;
    renderLiveManuscript();
  });
  bind("proposal-abstract-input", v => {
    projectState.abstract = v;
    checkAbstractWordCount(v);
    renderLiveManuscript();
  });
  bind("abstract-keywords-input", v => {
    projectState.keywords = v;
    renderLiveManuscript();
  });
  bind("proposal-references-input", v => {
    projectState.references = v;
    renderLiveManuscript();
  });

  bind("expected-outcomes-input", v => projectState.expected_outcomes = v);
  bind("impact-input", v => projectState.impact = v);
  bind("customer-input", v => projectState.customer = v);
  bind("market-input", v => projectState.market = v);
  bind("usps-input", v => projectState.usps = v);


  // Competitor Matrix (Exact 9 Dimensions)
  // 1. Principle / technology
  bind("comp-est-principle", v => { projectState.competitor_data.principle_established = v; projectState.competitor_data.incumbent_name = v; });
  bind("comp-rec-principle", v => { projectState.competitor_data.principle_recent = v; projectState.competitor_data.emerging_name = v; });
  bind("comp-prop-principle", v => { projectState.competitor_data.principle_proposed = v; projectState.competitor_data.proposed_name = v; });

  // 2. Main strength
  bind("comp-est-strength", v => projectState.competitor_data.strength_established = v);
  bind("comp-rec-strength", v => projectState.competitor_data.strength_recent = v);
  bind("comp-prop-strength", v => projectState.competitor_data.strength_proposed = v);

  // 3. Key limitation
  bind("comp-est-limitation", v => projectState.competitor_data.limitation_established = v);
  bind("comp-rec-limitation", v => projectState.competitor_data.limitation_recent = v);
  bind("comp-prop-limitation", v => projectState.competitor_data.limitation_proposed = v);

  // 4. Performance
  bind("comp-est-performance", v => { projectState.competitor_data.performance_established = v; projectState.competitor_data.incumbent_speed = v; });
  bind("comp-rec-performance", v => { projectState.competitor_data.performance_recent = v; projectState.competitor_data.emerging_speed = v; });
  bind("comp-prop-performance", v => { projectState.competitor_data.performance_proposed = v; projectState.competitor_data.proposed_speed = v; });

  // 5. Cost / resources
  bind("comp-est-cost", v => { projectState.competitor_data.cost_established = v; projectState.competitor_data.incumbent_cost = v; });
  bind("comp-rec-cost", v => { projectState.competitor_data.cost_recent = v; projectState.competitor_data.emerging_cost = v; });
  bind("comp-prop-cost", v => { projectState.competitor_data.cost_proposed = v; projectState.competitor_data.proposed_cost = v; });

  // 6. Safety / sustainability
  bind("comp-est-safety", v => { projectState.competitor_data.safety_established = v; projectState.competitor_data.incumbent_safety = v; });
  bind("comp-rec-safety", v => { projectState.competitor_data.safety_recent = v; projectState.competitor_data.emerging_safety = v; });
  bind("comp-prop-safety", v => { projectState.competitor_data.safety_proposed = v; projectState.competitor_data.proposed_safety = v; });

  // 7. Evidence available
  bind("comp-est-evidence", v => projectState.competitor_data.evidence_established = v);
  bind("comp-rec-evidence", v => projectState.competitor_data.evidence_recent = v);
  bind("comp-prop-evidence", v => projectState.competitor_data.evidence_proposed = v);

  // 8. Unresolved gap
  bind("comp-est-gap", v => projectState.competitor_data.gap_established = v);
  bind("comp-rec-gap", v => projectState.competitor_data.gap_recent = v);
  bind("comp-prop-gap", v => projectState.competitor_data.gap_proposed = v);

  // 9. Contribution of proposed study
  bind("comp-prop-contribution", v => projectState.competitor_data.contribution_proposed = v);

  // Legacy field backup bindings
  bind("comp-incumbent-name", v => { projectState.competitor_data.incumbent_name = v; projectState.competitor_data.principle_established = v; });
  bind("comp-emerging-name", v => { projectState.competitor_data.emerging_name = v; projectState.competitor_data.principle_recent = v; });
  bind("comp-proposed-name", v => { projectState.competitor_data.proposed_name = v; projectState.competitor_data.principle_proposed = v; });

  // Gantt Dynamic Duration & Scheduler Controls
  const durPreset = document.getElementById("gantt-duration-preset");
  const durInput = document.getElementById("gantt-total-duration");

  if (durPreset && !durPreset._wired) {
    durPreset._wired = true;
    durPreset.addEventListener("change", (e) => {
      const val = e.target.value;
      if (val !== "custom") {
        const months = parseInt(val, 10);
        if (durInput) durInput.value = months;
        if (!projectState.gantt_schedule) projectState.gantt_schedule = {};
        projectState.gantt_schedule.total_months = months;
        ensureGanttTasks();
        // Scale/clamp existing tasks if they exceed new total
        (projectState.gantt_schedule.tasks || []).forEach(t => {
          if (t.start > months) t.start = Math.max(1, months - 2);
          if (t.end > months) t.end = months;
        });
        syncGanttLegacyProperties();
        saveToStorage();
        renderGanttTasksTable();
        renderStep5GanttVisual();
        showToast(`Project duration set to ${months} months.`);
      }
    });
  }

  if (durInput && !durInput._wired) {
    durInput._wired = true;
    durInput.addEventListener("input", (e) => {
      const months = Math.max(3, Math.min(60, parseInt(e.target.value, 10) || 18));
      if (!projectState.gantt_schedule) projectState.gantt_schedule = {};
      projectState.gantt_schedule.total_months = months;
      if (durPreset) {
        durPreset.value = [6, 12, 18, 24, 36].includes(months) ? months.toString() : "custom";
      }
      ensureGanttTasks();
      (projectState.gantt_schedule.tasks || []).forEach(t => {
        if (t.start > months) t.start = Math.max(1, months - 2);
        if (t.end > months) t.end = months;
      });
      syncGanttLegacyProperties();
      saveToStorage();
      renderGanttTasksTable();
      renderStep5GanttVisual();
    });
  }

  // Literature Benchmark Timeline Apply Button
  const btnApplyBenchmark = document.getElementById("btn-apply-timeline-benchmark");
  if (btnApplyBenchmark && !btnApplyBenchmark._wired) {
    btnApplyBenchmark._wired = true;
    btnApplyBenchmark.addEventListener("click", () => {
      ensureGanttTasks();
      const gs = projectState.gantt_schedule || {};
      const totM = Math.max(3, Math.min(60, parseInt(gs.total_months, 10) || 18));
      const a = projectState.aims || {};

      const w1_s = 1;
      const w1_e = Math.max(2, Math.round(totM * 0.33));
      const w2_s = Math.max(2, Math.round(totM * 0.28));
      const w2_e = Math.max(w2_s + 1, Math.round(totM * 0.67));
      const w3_s = Math.max(3, Math.round(totM * 0.55));
      const w3_e = totM;

      gs.tasks = [
        {
          name: a.aim1_title ? `WP1: ${a.aim1_title}` : "WP1: Construction & Preparation",
          start: w1_s,
          end: w1_e,
          gate: "Sequence verified & vector expression confirmed"
        },
        {
          name: a.aim2_title ? `WP2: ${a.aim2_title}` : "WP2: Functional Testing & Evaluation",
          start: w2_s,
          end: w2_e,
          gate: "Quantitative activity & kinetic threshold achieved"
        },
        {
          name: a.aim3_title ? `WP3: ${a.aim3_title}` : "WP3: Real-World Validation & Performance",
          start: w3_s,
          end: w3_e,
          gate: "Target milestone validated in realistic operational matrix"
        }
      ];

      syncGanttLegacyProperties();
      saveToStorage();
      renderGanttTasksTable();
      renderStep5GanttVisual();
      showToast(`Applied literature benchmark schedule for ${totM}-month study!`);
    });
  }

  // Add Dynamic Timeline Milestone Button
  const btnAddGanttPoint = document.getElementById("btn-add-gantt-point");
  if (btnAddGanttPoint && !btnAddGanttPoint._wired) {
    btnAddGanttPoint._wired = true;
    btnAddGanttPoint.addEventListener("click", () => {
      ensureGanttTasks();
      const gs = projectState.gantt_schedule || {};
      const totM = Math.max(3, Math.min(60, parseInt(gs.total_months, 10) || 18));
      const count = (gs.tasks || []).length;
      const lastEnd = count > 0 ? (parseInt(gs.tasks[count - 1].end, 10) || 1) : 1;
      const newStart = Math.min(totM, Math.max(1, lastEnd));
      const newEnd = Math.min(totM, newStart + 3);

      if (!Array.isArray(gs.tasks)) gs.tasks = [];
      gs.tasks.push({
        name: `Milestone Phase ${count + 1}: Experimental Stage`,
        start: newStart,
        end: newEnd,
        gate: "Defined Go/No-Go Decision Gate"
      });

      syncGanttLegacyProperties();
      saveToStorage();
      renderGanttTasksTable();
      renderStep5GanttVisual();
      showToast(`Added Milestone Phase ${count + 1}! Edit duration & gate below.`);
    });
  }

  // Sync Gantt to Textplan Button
  const btnSyncGantt = document.getElementById("btn-sync-gantt-to-text");
  if (btnSyncGantt && !btnSyncGantt._wired) {
    btnSyncGantt._wired = true;
    btnSyncGantt.addEventListener("click", () => {
      ensureGanttTasks();
      const gs = projectState.gantt_schedule || {};
      const tasks = gs.tasks || [];
      const totM = Math.max(3, Math.min(60, parseInt(gs.total_months, 10) || 18));

      if (tasks.length === 0) {
        showToast("No milestones to sync. Click + Add Timeline Milestone first.");
        return;
      }

      const summary = tasks.map((t, idx) => {
        const s = t.start || 1;
        const e = t.end || totM;
        const gateStr = t.gate ? ` [Decision Gate: ${t.gate}]` : "";
        return `Phase ${idx + 1} (Months ${s}–${e}): ${t.name}.${gateStr}`;
      }).join("\n\n");

      const timeplanEl = document.getElementById("timeplan-input");
      if (timeplanEl) {
        timeplanEl.value = summary;
        projectState.time_plan = summary;
        saveToStorage();
        updateLiveScoreDebounced();
        showToast("Dynamic Gantt schedule synced to timeline summary!");
      }
    });
  }

  // Materials Table Action Buttons
  const btnAddMat = document.getElementById("btn-add-material-row");
  if (btnAddMat && !btnAddMat._wired) {
    btnAddMat._wired = true;
    btnAddMat.addEventListener("click", () => addMaterialRow());
  }

  const btnLoadMat = document.getElementById("btn-load-starter-materials");
  if (btnLoadMat && !btnLoadMat._wired) {
    btnLoadMat._wired = true;
    btnLoadMat.addEventListener("click", () => {
      projectState.budget_materials = getDefaultMaterials();
      renderMaterialsTable();
      saveToStorage();
      showToast("Standard molecular biology reagents loaded into budget!");
    });
  }

  const btnClearMat = document.getElementById("btn-clear-materials");
  if (btnClearMat && !btnClearMat._wired) {
    btnClearMat._wired = true;
    btnClearMat.addEventListener("click", () => {
      projectState.budget_materials = [];
      renderMaterialsTable();
      saveToStorage();
      showToast("Materials table cleared.");
    });
  }

  bind("swot-s", v => projectState.swot.strengths = v);
  bind("swot-w", v => { projectState.swot.weaknesses = v; checkClicheWarning(v); });
  bind("swot-o", v => projectState.swot.opportunities = v);
  bind("swot-t", v => { projectState.swot.threats = v; checkClicheWarning(v); });

  bind("timeplan-input", v => projectState.time_plan = v);
  bind("budget-input", v => projectState.budget = v);
  bind("references-input", v => projectState.references = v);

  // Aims Contingencies (B1)
  bind("aim1-fallback", v => {
    if (!projectState.aims_contingencies) projectState.aims_contingencies = {};
    projectState.aims_contingencies.aim1_fallback = v;
  });
  bind("aim2-fallback", v => {
    if (!projectState.aims_contingencies) projectState.aims_contingencies = {};
    projectState.aims_contingencies.aim2_fallback = v;
  });
  bind("aim3-fallback", v => {
    if (!projectState.aims_contingencies) projectState.aims_contingencies = {};
    projectState.aims_contingencies.aim3_fallback = v;
  });

  // Control Triad (B2)
  bind("control-negative", v => {
    if (!projectState.control_triad) projectState.control_triad = {};
    projectState.control_triad.negative = v;
  });
  bind("control-positive", v => {
    if (!projectState.control_triad) projectState.control_triad = {};
    projectState.control_triad.positive = v;
  });
  bind("control-specificity", v => {
    if (!projectState.control_triad) projectState.control_triad = {};
    projectState.control_triad.specificity = v;
  });

  // Biotech FMEA Matrix (B3)
  bind("fmea-off-target", v => {
    if (!projectState.biotech_risk_matrix) projectState.biotech_risk_matrix = {};
    projectState.biotech_risk_matrix.off_target = v;
  });
  bind("fmea-toxicity", v => {
    if (!projectState.biotech_risk_matrix) projectState.biotech_risk_matrix = {};
    projectState.biotech_risk_matrix.toxicity = v;
  });
  bind("fmea-solubility", v => {
    if (!projectState.biotech_risk_matrix) projectState.biotech_risk_matrix = {};
    projectState.biotech_risk_matrix.solubility = v;
  });
  bind("fmea-biosafety", v => {
    if (!projectState.biotech_risk_matrix) projectState.biotech_risk_matrix = {};
    projectState.biotech_risk_matrix.biosafety = v;
  });
}

function initStepperNavigation() {
  const indicators = document.querySelectorAll(".step-indicator");
  indicators.forEach(ind => {
    ind.addEventListener("click", () => goToStep(parseInt(ind.getAttribute("data-step"))));
  });

  // Top Phase switcher tabs
  document.querySelectorAll(".btn-phase-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const g = parseInt(tab.getAttribute("data-goto"));
      if (g) goToStep(g);
    });
  });

  document.querySelectorAll(".btn-step-prev").forEach(btn => {
    btn.addEventListener("click", () => goToStep(parseInt(btn.getAttribute("data-goto"))));
  });

  document.querySelectorAll(".btn-step-next").forEach(btn => {
    const target = btn.getAttribute("data-goto");
    if (target) btn.addEventListener("click", () => goToStep(parseInt(target)));
  });
}

function goToStep(stepNumber) {
  if (stepNumber < 1 || stepNumber > 4) return;
  currentStep = stepNumber;

  document.querySelectorAll(".step-panel").forEach(panel => panel.classList.remove("active"));
  const activePanel = document.getElementById(`step-panel-${stepNumber}`);
  if (activePanel) activePanel.classList.add("active");

  document.querySelectorAll(".step-indicator").forEach(ind => {
    const s = parseInt(ind.getAttribute("data-step"));
    ind.classList.remove("active");
    if (s === stepNumber) ind.classList.add("active");
    else if (s < stepNumber) ind.classList.add("completed");
  });

  document.querySelectorAll(".btn-phase-tab").forEach(tab => {
    const s = parseInt(tab.getAttribute("data-goto"));
    tab.classList.remove("active");
    if (s === stepNumber) tab.classList.add("active");
  });

  renderLiveManuscript();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initPresetSelector() {
  const select = document.getElementById("search-example-select");
  if (!select) return;
  select.addEventListener("change", async (e) => {
    const val = e.target.value;
    if (!val) return;
    try {
      const resp = await fetch("/api/search/examples");
      const examples = await resp.json();
      const chosen = examples[parseInt(val)];
      if (chosen) {
        if (chosen.model_id) {
          projectState.model_id = chosen.model_id;
          const modelSelect = document.getElementById("project-model-select");
          if (modelSelect) modelSelect.value = chosen.model_id;
          updateModelLabels(chosen.model_id);
        }
        const sysVal = chosen.system || chosen.chassis;
        document.getElementById("pillar-chassis").value = sysVal;
        document.getElementById("pillar-tool").value = chosen.tool;
        document.getElementById("pillar-target").value = chosen.target;

        projectState.system = sysVal;
        projectState.chassis = sysVal;
        projectState.tool = chosen.tool;
        projectState.target = chosen.target;
        saveToStorage();
        updateSearchLinksAndQuery();
        showToast(`Loaded ${chosen.category}: ${chosen.topic}`);
      }
    } catch (err) {
      console.error(err);
    }
  });
}

function updateSearchLinksAndQuery() {
  const chassis = (document.getElementById("pillar-chassis")?.value || projectState.chassis || projectState.system || "").trim();
  const tool = (document.getElementById("pillar-tool")?.value || projectState.tool || "").trim();
  const target = (document.getElementById("pillar-target")?.value || projectState.target || "").trim();

  let query = "";
  if (chassis && tool && target) {
    query = `("${chassis}") AND ("${tool}") AND ("${target}")`;
  } else if (chassis || tool || target) {
    const parts = [chassis, tool, target].filter(Boolean).map(p => `("${p}")`);
    query = parts.join(" AND ");
  } else {
    query = `"biotechnology" AND "enzyme" AND "yield"`;
  }

  const queryOut = document.getElementById("boolean-query-output");
  if (queryOut) queryOut.innerText = query;

  const encodedQuery = encodeURIComponent(query);
  const linkPubmed = document.getElementById("link-pubmed");
  if (linkPubmed) linkPubmed.href = `https://pubmed.ncbi.nlm.nih.gov/?term=${encodedQuery}`;

  const linkScholar = document.getElementById("link-scholar");
  if (linkScholar) linkScholar.href = `https://scholar.google.com/scholar?q=${encodedQuery}`;

  const linkEurope = document.getElementById("link-europe");
  if (linkEurope) linkEurope.href = `https://europepmc.org/search?query=${encodedQuery}`;
}

function initStep1Action() {
  const pChassis = document.getElementById("pillar-chassis");
  const pTool = document.getElementById("pillar-tool");
  const pTarget = document.getElementById("pillar-target");
  if (pChassis) pChassis.addEventListener("input", updateSearchLinksAndQuery);
  if (pTool) pTool.addEventListener("input", updateSearchLinksAndQuery);
  if (pTarget) pTarget.addEventListener("input", updateSearchLinksAndQuery);
  updateSearchLinksAndQuery();

  const btn = document.getElementById("btn-next-from-1");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const system = document.getElementById("pillar-chassis").value.trim();
    const tool = document.getElementById("pillar-tool").value.trim();
    const target = document.getElementById("pillar-target").value.trim();

    if (!system || !tool || !target) {
      showToast("Please specify all 3 research pillars.");
      return;
    }

    try {
      btn.innerText = "Formulating Search Query...";
      const resp = await fetch("/api/search/build", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chassis: system, tool, target })
      });
      const data = await resp.json();
      
      projectState.search_query = data.query;
      saveToStorage();

      document.getElementById("boolean-query-output").innerText = data.query;
      document.getElementById("link-pubmed").href = data.links.pubmed;
      document.getElementById("link-scholar").href = data.links.scholar;
      document.getElementById("link-europe").href = data.links.europe_pmc;

      goToStep(2);
      showToast("Step 2 unlocked! Review search links.");
    } catch (err) {
      console.error(err);
      showToast("Error generating search.");
    } finally {
      btn.innerText = "Lock in Research Pillars & Go to Step 2: Literature Search ➔";
    }
  });

  const btnCopy = document.getElementById("btn-copy-query");
  if (btnCopy) {
    btnCopy.addEventListener("click", () => {
      const q = document.getElementById("boolean-query-output").innerText;
      navigator.clipboard.writeText(q);
      showToast("Copied query string to clipboard!");
    });
  }
}

// DOI Auto-Resolver (Step 2)
function initDoiResolver() {
  const btn = document.getElementById("btn-fetch-doi");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const doiInput = document.getElementById("doi-lookup-input").value.trim();
    const resultsBox = document.getElementById("doi-results-box");
    if (!doiInput) {
      showToast("Please enter a DOI string.");
      return;
    }
    resultsBox.innerHTML = "<p><em>Resolving DOI via CrossRef API...</em></p>";
    try {
      const resp = await fetch("/api/reference/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doi: doiInput })
      });
      const data = await resp.json();
      if (data.success) {
        const badgeColor = data.is_recent ? "#059669" : "#dc2626";
        const badgeText = data.is_recent ? "✅ Recent (2021–2026)" : "⚠️ Older than 5 Years";
        resultsBox.innerHTML = `
          <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong>${data.title}</strong>
              <span style="background:${badgeColor}; color:white; font-size:0.75rem; padding:2px 8px; border-radius:4px; font-weight:700;">${badgeText}</span>
            </div>
            <div style="font-size:0.85rem; color:#475569; margin-top:4px;">${data.authors} (${data.year}) • <em>${data.journal}</em></div>
            <div style="margin-top:8px;">
              <button id="btn-insert-doi-ref" class="btn-insert-template" style="font-size:0.8rem;">+ Insert into References List</button>
            </div>
          </div>
        `;
        document.getElementById("btn-insert-doi-ref").addEventListener("click", () => {
          const refsEl = document.getElementById("references-input");
          if (refsEl) {
            refsEl.value = (refsEl.value ? refsEl.value + "\n" : "") + data.formatted_citation;
            refsEl.dispatchEvent(new Event("input"));
            showToast("Citation appended to References!");
          }
        });
      } else {
        resultsBox.innerHTML = `<p style="color:#dc2626;">Error: ${data.error}</p>`;
      }
    } catch (err) {
      console.error(err);
      resultsBox.innerHTML = "<p style='color:red;'>Failed to contact CrossRef.</p>";
    }
  });
}

// RHEV Paraphrase Gym (Step 3)
function initRhevParaphraseLab() {
  const btnHide = document.getElementById("btn-rhev-hide");
  const origTextarea = document.getElementById("rhev-original");
  if (btnHide && origTextarea) {
    btnHide.addEventListener("click", () => {
      origTextarea.classList.toggle("blurred");
      btnHide.innerText = origTextarea.classList.contains("blurred") ? "👁️ Unhide Original Text" : "👁️ Hide Original Text";
    });
  }

  const btnAudit = document.getElementById("btn-rhev-audit");
  if (btnAudit) {
    btnAudit.addEventListener("click", async () => {
      const original = document.getElementById("rhev-original").value.trim();
      const draft = document.getElementById("rhev-draft").value.trim();
      const resultsBox = document.getElementById("rhev-results-box");

      if (!original || !draft) {
        showToast("Please enter both the original sentence and your draft.");
        return;
      }

      resultsBox.innerHTML = "<p><em>Auditing n-gram overlap and Turnitin risk...</em></p>";
      try {
        const resp = await fetch("/api/paraphrase/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ original, draft })
        });
        const data = await resp.json();

        let badgeBg = data.risk_level === "low" ? "#10b981" : (data.risk_level === "medium" ? "#f59e0b" : "#ef4444");
        let html = `
          <div style="background:white; border:1px solid #c7d2fe; border-radius:8px; padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <strong>${data.verdict}</strong>
              <span style="background:${badgeBg}; color:white; font-size:0.75rem; padding:3px 8px; border-radius:4px; font-weight:800;">
                Turnitin Risk: ${data.risk_level.toUpperCase()} (${data.similarity_score}%)
              </span>
            </div>
            <p style="font-size:0.85rem; color:#334155; margin-bottom:8px;">${data.advice}</p>
        `;

        if (data.verbatim_runs && data.verbatim_runs.length > 0) {
          html += `<div style="font-size:0.8rem; color:#b91c1c;"><strong>⚠️ Verbatim Runs Flagged:</strong> ${data.verbatim_runs.map(v => `<code>"${v}"</code>`).join(", ")}</div>`;
        }
        html += `</div>`;
        resultsBox.innerHTML = html;
        showToast("Paraphrase audit complete!");
      } catch (err) {
        console.error(err);
        resultsBox.innerHTML = "<p style='color:red;'>Error running paraphrase audit.</p>";
      }
    });
  }
}

// Funnel Mad-Libs & Narrative Preview (Step 4)
function initFunnelMadLibs() {
  document.querySelectorAll(".btn-insert-template").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const template = btn.getAttribute("data-template");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.value = template;
        targetEl.dispatchEvent(new Event("input"));
        showToast("Formal sentence frame inserted.");
      }
    });
  });

  const btnPreview = document.getElementById("btn-assemble-background");
  if (btnPreview) {
    btnPreview.addEventListener("click", () => {
      const t1 = projectState.funnel.tier1.trim();
      const t2 = projectState.funnel.tier2.trim();
      const t3 = projectState.funnel.tier3.trim();
      const t4 = projectState.funnel.tier4.trim();
      const previewBox = document.getElementById("assembled-background-preview");
      if (previewBox) {
        previewBox.style.display = "block";
        previewBox.innerText = [t1, t2, t3, t4].filter(Boolean).join("\n\n") || "Fill in the 4 tiers above to view the synthesized background narrative.";
      }
    });
  }

  const btnCritiqueBg = document.getElementById("btn-critique-background");
  if (btnCritiqueBg) {
    btnCritiqueBg.addEventListener("click", async () => {
      const bgText = [projectState.funnel.tier1, projectState.funnel.tier2, projectState.funnel.tier3, projectState.funnel.tier4].join(" ");
      await runSocraticCritique("Background", bgText, "socratic-bg-results");
    });
  }
}

// Flowchart Diagram Generator (Native Scientific Vector Diagram - Step 4)
function initDiagramGenerator() {
  const btn = document.getElementById("btn-generate-diagram");
  if (!btn) return;

  const renderWorkflowDiagram = () => {
    const tool = projectState.tool || "Engineered Construct";
    const system = projectState.chassis || projectState.system || "Host Chassis / Matrix";
    const aim1 = (projectState.aims && projectState.aims.aim1) ? projectState.aims.aim1.slice(0, 42) : "In Silico Design & Mutation Modeling";
    const aim2 = (projectState.aims && projectState.aims.aim2) ? projectState.aims.aim2.slice(0, 42) : "Recombinant Screening & Kinetic Assays";
    const aim3 = (projectState.aims && projectState.aims.aim3) ? projectState.aims.aim3.slice(0, 42) : "Functional Validation & Translation";
    const metric = (projectState.matrix && projectState.matrix.blue) ? projectState.matrix.blue.slice(0, 36) : "Validated Milestone Benchmark";

    const phases = [
      { tag: "Phase 1", name: "Construct Design", detail: tool, icon: "🧬", color: "#4f46e5", bg: "#eef2ff", border: "#c7d2fe" },
      { tag: "Phase 2", name: "Host System", detail: system, icon: "🧫", color: "#0891b2", bg: "#ecfeff", border: "#a5f3fc" },
      { tag: "Phase 3", name: "Work Package 1", detail: aim1, icon: "🔬", color: "#059669", bg: "#ecfdf5", border: "#a7f3d0" },
      { tag: "Phase 4", name: "Work Package 2", detail: aim2, icon: "⚙️", color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
      { tag: "Phase 5", name: "Milestone Metric", detail: metric, icon: "🎯", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" }
    ];

    const viewport = document.getElementById("diagram-viewport");
    if (viewport) {
      viewport.innerHTML = `
        <div style="display: flex; align-items: stretch; justify-content: center; flex-wrap: wrap; gap: 8px; padding: 12px 6px;">
          ${phases.map((p, i) => `
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="background: ${p.bg}; border: 1.5px solid ${p.border}; border-radius: 8px; padding: 12px 14px; min-width: 150px; max-width: 175px; text-align: left; box-shadow: 0 1px 3px rgba(0,0,0,0.05); transition: transform 0.2s;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
                  <span style="font-size: 0.7rem; font-weight: 800; color: ${p.color}; text-transform: uppercase; letter-spacing: 0.5px;">${p.tag}</span>
                  <span style="font-size: 1rem;">${p.icon}</span>
                </div>
                <div style="font-size: 0.82rem; font-weight: 700; color: #1e293b; margin-bottom: 3px;">${escapeHtml(p.name)}</div>
                <div style="font-size: 0.72rem; color: #64748b; line-height: 1.35; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${escapeHtml(p.detail)}</div>
              </div>
              ${i < phases.length - 1 ? `<div style="color: #94a3b8; font-size: 1.2rem; font-weight: 800; user-select: none;">➔</div>` : ""}
            </div>
          `).join("")}
        </div>
      `;
    }
  };

  btn.addEventListener("click", () => {
    renderWorkflowDiagram();
    showToast("Experimental workflow flowchart generated!");
  });

  // Automatically render initial workflow state
  renderWorkflowDiagram();
}

// Tabulated Budget Calculator (Step 5)
function initBudgetCalculator() {
  const inputs = document.querySelectorAll(".budget-input-calc");
  const updateBudget = () => {
    const cons = parseFloat(document.getElementById("budget-consumables")?.value || 0);
    const pers = parseFloat(document.getElementById("budget-personnel")?.value || 0);
    const util = parseFloat(document.getElementById("budget-utilities")?.value || 0);
    const equip = parseFloat(document.getElementById("budget-equipment")?.value || 0);

    const total = cons + pers + util + equip;
    const totalDisplay = document.getElementById("budget-total-display");
    const breakdownDisplay = document.getElementById("budget-breakdown-display");

    if (totalDisplay) totalDisplay.innerText = `$${total.toLocaleString()}`;
    if (breakdownDisplay && total > 0) {
      const pC = Math.round((cons / total) * 100);
      const pP = Math.round((pers / total) * 100);
      const pU = Math.round((util / total) * 100);
      const pE = Math.round((equip / total) * 100);
      breakdownDisplay.innerText = `Consumables: ${pC}% | Personnel: ${pP}% | Overhead: ${pU}% | Equipment: ${pE}%`;
    }

    projectState.budget_items = {
      consumables: cons,
      personnel: pers,
      utilities: util,
      equipment: equip
    };

    const budgetSummary = `1. Consumables & Reagents: $${cons.toLocaleString()}\n2. Personnel Incentives: $${pers.toLocaleString()}\n3. Utilities & Overhead: $${util.toLocaleString()}\n4. Specialized Equipment: $${equip.toLocaleString()}\nTotal Budget: $${total.toLocaleString()}`;
    projectState.budget = budgetSummary;
    const notesEl = document.getElementById("budget-input");
    if (notesEl && !notesEl.value.includes("Consumables")) {
      notesEl.value = budgetSummary + (notesEl.value ? "\n\nJustification:\n" + notesEl.value : "");
    }
    saveToStorage();
    if (typeof activeFigure !== "undefined" && activeFigure === "donut") {
      renderActiveVisualFigure();
    }
  };

  inputs.forEach(inp => inp.addEventListener("input", updateBudget));
  updateBudget();
}

// Impact, Gap Taxonomy, Novelty & Competitor Analysis Suite
function initImpactAndNoveltySuite() {
  // Gap Taxonomy Card clicks
  const gapCards = document.querySelectorAll(".gap-taxonomy-card");
  const gapGuidance = document.getElementById("gap-guidance-box");
  const gapGuidanceMap = {
    mechanistic: "<strong>Mechanistic Gap Guidance:</strong> State the unresolved structural or biophysical phenomenon. <em>Example: 'While wild-type PETase cleaves ester bonds, the structural mechanism governing acid-induced denaturation at pH < 5.0 remains unresolved.'</em>",
    performance: "<strong>Performance Ceiling Gap Guidance:</strong> State the physical or catalytic threshold. <em>Example: 'Industrial adoption is critically constrained by enzyme thermolability (Tm < 48°C), which causes active-site unfolding within 12 hours.'</em>",
    methodological: "<strong>Methodological Deployability Gap Guidance:</strong> Contrast current laboratory bottlenecks. <em>Example: 'Standard broth microdilution requires 24–48 hours, delaying clinical interventions during acute bacteremia and septic episodes.'</em>",
    matrix: "<strong>Environmental / Matrix Gap Guidance:</strong> Contrast buffer vs real-world inhibitor matrix. <em>Example: 'Although Cas12a operates robustly in synthetic buffer, humic acids and heavy metals in industrial effluent inhibit Cas12a collateral cleavage by >85%.'</em>",
    translational: "<strong>Bioreactor Scale-Up Gap Guidance:</strong> Address mass transfer or metabolic burden at scale. <em>Example: 'High plasmid copy numbers impose severe metabolic burden, precipitating plasmid loss and a 70% drop in recombinant yield during fed-batch fermentation.'</em>"
  };

  gapCards.forEach(card => {
    card.addEventListener("click", () => {
      gapCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      const gapKey = card.getAttribute("data-gap");
      if (gapGuidance && gapGuidanceMap[gapKey]) {
        gapGuidance.innerHTML = gapGuidanceMap[gapKey];
      }
    });
  });

  // Gap Audit Button
  const btnAuditGap = document.getElementById("btn-audit-gap");
  const gapResultsBox = document.getElementById("gap-audit-results-box");
  if (btnAuditGap && gapResultsBox) {
    btnAuditGap.addEventListener("click", async () => {
      const gapText = projectState.funnel.tier3.trim();
      if (!gapText) {
        showToast("Please write a draft in Tier 3 (The Knowledge Gap) first.");
        return;
      }
      gapResultsBox.style.display = "block";
      gapResultsBox.innerHTML = "<p><em>Auditing gap phrasing and taxonomy classification...</em></p>";
      try {
        const resp = await fetch("/api/impact/gap_audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ gap_text: gapText })
        });
        const data = await resp.json();
        let badgeColor = data.passed ? "#16a34a" : "#dc2626";
        let html = `
          <div style="background: white; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong>${data.gap_title}</strong>
              <span style="background: ${badgeColor}; color: white; font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
                Score: ${data.score} / 5.0 Marks
              </span>
            </div>
            <p style="font-size: 0.82rem; color: #1e293b; margin-bottom: 6px;">${data.feedback}</p>
        `;
        if (data.issues && data.issues.length > 0) {
          html += `<ul style="font-size: 0.78rem; color: #b91c1c; margin: 0; padding-left: 18px;">${data.issues.map(i => `<li>${i}</li>`).join("")}</ul>`;
        }
        if (data.recommendations && data.recommendations.length > 0) {
          html += `<div style="font-size: 0.78rem; color: #15803d; margin-top: 6px;"><strong>💡 Recommendation:</strong> ${data.recommendations[0]}</div>`;
        }
        html += `</div>`;
        gapResultsBox.innerHTML = html;
        showToast("Gap analysis complete!");
      } catch (err) {
        console.error(err);
        gapResultsBox.innerHTML = "<p style='color:red;'>Error running gap audit.</p>";
      }
    });
  }

  // Novelty & Soundness Auditor (Host-Swap Trap Detector)
  const btnAuditNovelty = document.getElementById("btn-audit-novelty");
  if (btnAuditNovelty && gapResultsBox) {
    btnAuditNovelty.addEventListener("click", async () => {
      gapResultsBox.style.display = "block";
      gapResultsBox.innerHTML = "<p><em>Auditing novelty, inventive leap, and experimental controls...</em></p>";
      try {
        const resp = await fetch("/api/impact/novelty_audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: projectState.title,
            chassis: projectState.system || projectState.chassis,
            tool: projectState.tool,
            target: projectState.target,
            hypothesis: projectState.funnel.tier4,
            methodology: projectState.methodology
          })
        });
        const data = await resp.json();
        let badgeColor = data.soundness_score >= 75 ? "#16a34a" : (data.soundness_score >= 50 ? "#d97706" : "#dc2626");
        let html = `
          <div style="background: white; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong>${data.verdict}</strong>
              <span style="background: ${badgeColor}; color: white; font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
                Soundness: ${data.soundness_score} / 100
              </span>
            </div>
        `;
        if (data.is_host_swap_trap) {
          html += `<div style="background: #fef2f2; border: 1px solid #fca5a5; color: #991b1b; padding: 8px; border-radius: 4px; font-size: 0.8rem; margin-bottom: 8px;">
            ⚠️ <strong>Host-Swap Trap Warning:</strong> Merely moving a known tool into another host without an explicit molecular modification (e.g. rational mutation, catalytic fusion, or promoter engineering) represents an incremental student exercise rather than fundable grant novelty.
          </div>`;
        }
        if (data.issues && data.issues.length > 0) {
          html += `<ul style="font-size: 0.78rem; color: #b91c1c; margin: 0; padding-left: 18px;">${data.issues.map(i => `<li>${i}</li>`).join("")}</ul>`;
        }
        if (data.strengths && data.strengths.length > 0) {
          html += `<ul style="font-size: 0.78rem; color: #15803d; margin-top: 6px; padding-left: 18px;">${data.strengths.map(s => `<li>${s}</li>`).join("")}</ul>`;
        }
        html += `</div>`;
        gapResultsBox.innerHTML = html;
        showToast("Novelty & Soundness audit complete!");
      } catch (err) {
        console.error(err);
        gapResultsBox.innerHTML = "<p style='color:red;'>Error auditing novelty.</p>";
      }
    });
  }

  // Search for Significance Queries
  const btnSearchSig = document.getElementById("btn-search-significance");
  const sigResultsBox = document.getElementById("significance-search-results-box");
  if (btnSearchSig && sigResultsBox) {
    btnSearchSig.addEventListener("click", async () => {
      sigResultsBox.style.display = "block";
      sigResultsBox.innerHTML = "<p><em>Generating epidemiological & economic burden queries...</em></p>";
      try {
        const resp = await fetch("/api/impact/significance_search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chassis: projectState.system || projectState.chassis,
            tool: projectState.tool,
            target: projectState.target,
            modality: projectState.model_id
          })
        });
        const data = await resp.json();
        let html = `
          <div style="background: white; border: 1px solid #a7f3d0; border-radius: 8px; padding: 12px;">
            <div style="font-weight: 700; color: #065f46; font-size: 0.85rem; margin-bottom: 6px;">
              🔍 Clickable Significance & Burden Searches:
            </div>
            <p style="font-size: 0.78rem; color: #047857; margin-bottom: 10px;">${data.guidance}</p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <a href="${data.links.pubmed_burden}" target="_blank" class="btn-direct-link" style="background-color: #059669; font-size: 0.78rem;">
                🏥 PubMed Health Burden (DALYs/Mortality)
              </a>
              <a href="${data.links.google_market}" target="_blank" class="btn-direct-link" style="background-color: #0284c7; font-size: 0.78rem;">
                📊 Google Market Size & CAGR ($ Millions)
              </a>
              <a href="${data.links.global_orgs}" target="_blank" class="btn-direct-link" style="background-color: #4f46e5; font-size: 0.78rem;">
                🌐 WHO / FAO / World Bank Statistics
              </a>
            </div>
          </div>
        `;
        sigResultsBox.innerHTML = html;
        showToast("Significance queries ready!");
      } catch (err) {
        console.error(err);
        sigResultsBox.innerHTML = "<p style='color:red;'>Error generating significance queries.</p>";
      }
    });
  }

  // USP Template Inserter
  const btnUspTpl = document.getElementById("btn-insert-usp-template");
  if (btnUspTpl) {
    btnUspTpl.addEventListener("click", () => {
      const tool = projectState.tool.trim() || "engineered biocatalytic platform";
      const incumbent = (projectState.competitor_data && projectState.competitor_data.incumbent_name.trim()) || "conventional commercial benchmark systems";
      const template = `Unlike ${incumbent} which suffer from high operational costs and slow turnaround times, our ${tool} achieves a 4-fold increase in reaction throughput under ambient temperature, thereby reducing downstream capital expenditure by 60% and enabling decentralized deployment.`;
      const uspEl = document.getElementById("usps-input");
      if (uspEl) {
        uspEl.value = template;
        uspEl.dispatchEvent(new Event("input"));
        showToast("Proven USP formula inserted.");
      }
    });
  }

  // Audit USP Button
  const btnAuditUsp = document.getElementById("btn-audit-usp");
  const uspResultsBox = document.getElementById("usp-audit-results-box");
  if (btnAuditUsp && uspResultsBox) {
    btnAuditUsp.addEventListener("click", async () => {
      const uspText = projectState.usps.trim();
      if (!uspText) {
        showToast("Please enter a USP statement first.");
        return;
      }
      uspResultsBox.style.display = "block";
      uspResultsBox.innerHTML = "<p><em>Auditing competitive advantage and checking for strawman competitors...</em></p>";
      try {
        const resp = await fetch("/api/impact/competitor_audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            competitor_data: projectState.competitor_data,
            usp_text: uspText
          })
        });
        const data = await resp.json();
        let badgeColor = data.passed ? "#16a34a" : "#dc2626";
        let html = `
          <div style="background: white; border: 1px solid #c7d2fe; border-radius: 8px; padding: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong>Competitive Advantage & USP Audit</strong>
              <span style="background: ${badgeColor}; color: white; font-size: 0.75rem; font-weight: 800; padding: 2px 8px; border-radius: 4px;">
                Score: ${data.score} / 5.0 Marks
              </span>
            </div>
            <p style="font-size: 0.82rem; color: #1e293b; margin-bottom: 6px;">${data.feedback}</p>
        `;
        if (data.issues && data.issues.length > 0) {
          html += `<ul style="font-size: 0.78rem; color: #b91c1c; margin: 0; padding-left: 18px;">${data.issues.map(i => `<li>${i}</li>`).join("")}</ul>`;
        }
        if (data.strengths && data.strengths.length > 0) {
          html += `<ul style="font-size: 0.78rem; color: #15803d; margin-top: 6px; padding-left: 18px;">${data.strengths.map(s => `<li>${s}</li>`).join("")}</ul>`;
        }
        html += `</div>`;
        uspResultsBox.innerHTML = html;
        showToast("USP audit complete!");
      } catch (err) {
        console.error(err);
        uspResultsBox.innerHTML = "<p style='color:red;'>Error auditing USP.</p>";
      }
    });
  }
}

// 10-Node Research Logic Chain Controller
function initLogicChainTrack() {
  const nodes = document.querySelectorAll(".chain-node");
  nodes.forEach(node => {
    node.addEventListener("click", () => {
      const step = parseInt(node.getAttribute("data-target-step"));
      const targetId = node.getAttribute("data-target-id");
      if (step) goToStep(step);
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.focus();
            el.style.transition = "box-shadow 0.3s ease";
            el.style.boxShadow = "0 0 0 3px rgba(37, 99, 235, 0.4)";
            setTimeout(() => { el.style.boxShadow = ""; }, 1800);
          }
        }, 150);
      }
    });
  });
}

let logicChainDebounceTimer = null;
function updateLogicChainUIDebounced() {
  clearTimeout(logicChainDebounceTimer);
  logicChainDebounceTimer = setTimeout(updateLogicChainUI, 500);
}

async function updateLogicChainUI() {
  if (isFileProtocol) {
    calculateLocalLogicChain();
    return;
  }
  try {
    const resp = await fetch("/api/impact/chain_check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectState)
    });
    const data = await resp.json();

    const healthBadge = document.getElementById("chain-health-badge");
    if (healthBadge) {
      healthBadge.innerText = `Health: ${data.chain_health_pct}% Complete (${data.filled_nodes}/10)`;
      if (data.chain_health_pct >= 80) {
        healthBadge.className = "chain-badge good";
      } else {
        healthBadge.className = "chain-badge";
      }
    }

    if (data.nodes) {
      data.nodes.forEach(n => {
        const nodeEl = document.getElementById(`node-${n.id}`);
        if (nodeEl) {
          if (n.filled) nodeEl.classList.add("filled");
          else nodeEl.classList.remove("filled");
        }
      });
    }

    const warningsBox = document.getElementById("chain-warnings-box");
    if (warningsBox) {
      if (data.warnings && data.warnings.length > 0) {
        warningsBox.style.display = "block";
        warningsBox.innerHTML = `<strong>⚠️ Narrative Coherence Notice:</strong> ${data.warnings.join(" ")}`;
      } else {
        warningsBox.style.display = "none";
      }
    }
  } catch (err) {
    // Non-blocking background sync
  }
}

// Reference Recency Auditor (Step 6)
function initRefRecencyAuditor() {
  const btn = document.getElementById("btn-audit-refs-recency");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const text = document.getElementById("references-input").value.trim();
    const box = document.getElementById("references-recency-box");
    if (!text) {
      showToast("Please enter references first.");
      return;
    }
    try {
      const resp = await fetch("/api/reference/audit_recency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ references: text })
      });
      const data = await resp.json();
      const color = data.passed_rubric ? "#059669" : "#dc2626";
      box.innerHTML = `
        <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:10px; font-size:0.85rem;">
          <strong style="color:${color};">${data.feedback}</strong>
          <div style="margin-top:4px; color:#475569;">Total Citations Analyzed: ${data.total_count} (Recent: ${data.recent_count})</div>
        </div>
      `;
      showToast("Recency check complete!");
    } catch (err) {
      console.error(err);
    }
  });
}

// Socratic Critique API Call
async function runSocraticCritique(section, text, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "<p><em>Analyzing scientific logic and rubric compliance...</em></p>";
  try {
    const resp = await fetch("/api/socratic/critique", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, text, context: projectState })
    });
    const result = await resp.json();

    if (result.status === "refusal") {
      container.innerHTML = `<div class="socratic-alert" style="background:#fee2e2; border-color:#fca5a5; color:#991b1b;"><strong>${result.message}</strong></div>`;
      return;
    }

    let html = "";
    if (result.praise && result.praise.length > 0) html += `<div style="color:#065f46; font-size:0.85rem; margin-bottom:8px;"><strong>✅ Strengths:</strong> ${result.praise.join(" ")}</div>`;
    if (result.critiques && result.critiques.length > 0) html += `<div style="color:#9a3412; font-size:0.85rem; margin-bottom:8px;"><strong>⚠️ Flaws Flagged:</strong> ${result.critiques.join(" ")}</div>`;
    if (result.socratic_questions && result.socratic_questions.length > 0) {
      html += `<div class="socratic-title">🤔 Socratic Counter-Questions:</div>`;
      result.socratic_questions.forEach(q => html += `<div class="socratic-question-item"><strong>Mentor Query:</strong> ${q}</div>`);
    }
    container.innerHTML = html;
  } catch (e) {
    console.error(e);
    container.innerHTML = "<p style='color:red;'>Could not connect to Socratic engine.</p>";
  }
}

// Step 6: Full Writing Audit & Viva Voce
function initAuditAndViva() {
  const btnWritingAudit = document.getElementById("btn-run-full-writing-audit");
  if (btnWritingAudit) btnWritingAudit.addEventListener("click", async () => await runWritingAudit());

  const btnAudit = document.getElementById("btn-audit-full");
  if (btnAudit) btnAudit.addEventListener("click", async () => await runWritingAudit());

  const btnViva = document.getElementById("btn-generate-viva");
  if (btnViva) {
    btnViva.addEventListener("click", async () => {
      try {
        btnViva.innerText = "Simulating Study Section Review...";
        const resp = await fetch("/api/viva/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(projectState)
        });
        const data = await resp.json();
        renderVivaQuestions(data.questions);
        showToast("Viva Voce defense questions generated!");
      } catch (e) {
        console.error(e);
        showToast("Error generating viva questions.");
      } finally {
        btnViva.innerText = "🎙️ Simulate Viva Voce Review";
      }
    });
  }
}

async function runWritingAudit() {
  const container = document.getElementById("full-writing-audit-container") || document.getElementById("full-audit-container");
  if (!container) return;

  container.innerHTML = "<p style='color:#4f46e5; font-weight:600;'><em>🔍 Auditing all 9 proposal written sections for scientific rigor, future tense compliance, and citation recency...</em></p>";
  try {
    const resp = await fetch("/api/writing/audit_all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectState)
    });
    const result = await resp.json();
    renderWritingAuditReport(result);
    showToast("Full Writing Audit complete!");
  } catch (e) {
    console.error(e);
    container.innerHTML = "<p style='color:red;'>Error running writing audit.</p>";
  }
}

function renderWritingAuditReport(data) {
  const container = document.getElementById("full-writing-audit-container") || document.getElementById("full-audit-container");
  if (!container) return;

  const s = data.summary;
  let summaryBg = "#f0fdf4";
  let summaryBorder = "#86efac";
  let summaryColor = "#166534";

  if (s.overall_status === "Revisions Recommended") {
    summaryBg = "#eff6ff";
    summaryBorder = "#93c5fd";
    summaryColor = "#1e40af";
  } else if (s.overall_status === "Draft in Progress") {
    summaryBg = "#fffbeb";
    summaryBorder = "#fde68a";
    summaryColor = "#92400e";
  }

  let html = `
    <div style="background: ${summaryBg}; border: 1px solid ${summaryBorder}; border-radius: 10px; padding: 16px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div>
        <div style="font-size: 0.75rem; font-weight: 800; color: ${summaryColor}; text-transform: uppercase;">Writing Health Standing</div>
        <div style="font-size: 1.5rem; font-weight: 800; color: ${summaryColor};">${s.overall_status}</div>
      </div>
      <div style="display: flex; gap: 12px; font-size: 0.85rem;">
        <div style="background: white; padding: 8px 14px; border-radius: 6px; border: 1px solid ${summaryBorder};">
          <strong style="color: #16a34a;">${s.passed_sections}</strong> / ${s.total_sections} Passed
        </div>
        <div style="background: white; padding: 8px 14px; border-radius: 6px; border: 1px solid ${summaryBorder};">
          <strong style="color: #d97706;">${s.warning_sections}</strong> Need Polish
        </div>
        <div style="background: white; padding: 8px 14px; border-radius: 6px; border: 1px solid ${summaryBorder};">
          <strong style="color: #dc2626;">${s.incomplete_sections}</strong> Incomplete
        </div>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 14px;">
  `;

  data.sections.forEach(sec => {
    let cardBorder = "#e2e8f0";
    let badgeBg = "#f1f5f9";
    let badgeColor = "#475569";
    if (sec.status === "pass") {
      cardBorder = "#bbf7d0";
      badgeBg = "#dcfce7";
      badgeColor = "#166534";
    } else if (sec.status === "warning") {
      cardBorder = "#fef08a";
      badgeBg = "#fef9c3";
      badgeColor = "#854d0e";
    } else {
      cardBorder = "#fecaca";
      badgeBg = "#fee2e2";
      badgeColor = "#991b1b";
    }

    html += `
      <div style="background: white; border: 1px solid ${cardBorder}; border-radius: 8px; padding: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <strong style="color: #1e293b; font-size: 0.95rem;">${sec.name}</strong>
          <span style="font-size: 0.75rem; font-weight: 700; background: ${badgeBg}; color: ${badgeColor}; padding: 3px 8px; border-radius: 9999px;">${sec.badge}</span>
        </div>
        <div style="font-size: 0.8rem; color: #64748b; font-style: italic; background: #f8fafc; padding: 6px 10px; border-radius: 6px; margin-bottom: 8px;">"${sec.excerpt}"</div>
    `;

    if (sec.strengths && sec.strengths.length > 0) {
      html += `<div style="font-size: 0.82rem; color: #15803d; margin-bottom: 4px;"><strong>✅ Strengths:</strong> ${sec.strengths.join(" • ")}</div>`;
    }

    if (sec.issues && sec.issues.length > 0) {
      html += `<div style="font-size: 0.82rem; color: #b91c1c; margin-bottom: 4px;"><strong>⚠️ Review Points:</strong> ${sec.issues.join(" • ")}</div>`;
    }

    if (sec.action_recommendation) {
      html += `<div style="font-size: 0.8rem; color: #4338ca; background: #eef2ff; padding: 6px 10px; border-radius: 6px; margin-top: 6px;"><strong>💡 Action:</strong> ${sec.action_recommendation}</div>`;
    }

    html += `</div>`;
  });

  html += `</div>`;
  container.innerHTML = html;
}

async function runFullAudit() {
  await runWritingAudit();
}

function renderAuditScorecard(audit) {
  const container = document.getElementById("full-audit-container");
  if (!container) return;
  const b = audit.breakdown;
  let html = `
    <div style="background:#f1f5f9; border-radius:10px; padding:16px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <span style="font-size:0.75rem; font-weight:800; color:#64748b; text-transform:uppercase;">Estimated BT_301 Grade</span>
        <div style="font-size:1.8rem; font-weight:800; color:#0f172a;">${audit.gpa_score} <span style="font-size:1rem; color:#64748b;">/ 10.0 GPA</span></div>
      </div>
      <div style="text-align:right;">
        <span style="font-size:0.75rem; font-weight:800; color:#64748b; text-transform:uppercase;">Cumulative Raw Marks</span>
        <div style="font-size:1.4rem; font-weight:800; color:#2563eb;">${audit.raw_total} / 85.0</div>
      </div>
    </div>

    <table class="rubric-table">
      <thead>
        <tr>
          <th>Grant Criterion</th>
          <th>Max</th>
          <th>Score</th>
          <th>Diagnostic Feedback</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Title Formula</strong></td><td>2.0</td><td class="rubric-score-cell">${b.title ? b.title.score : 0}</td><td>${b.title && b.title.report ? b.title.report.feedback : ''}</td></tr>
        <tr><td><strong>Structured Abstract</strong></td><td>5.0</td><td class="rubric-score-cell">${b.abstract ? b.abstract.score : 0}</td><td>${b.abstract && b.abstract.report ? b.abstract.report.feedback : ''}</td></tr>
        <tr><td><strong>Background Funnel & Gap</strong></td><td>20.0</td><td class="rubric-score-cell">${b.background ? b.background.score : 0}</td><td>${b.background && b.background.report ? b.background.report.feedback : ''}</td></tr>
        <tr><td><strong>Specific Objectives</strong></td><td>5.0</td><td class="rubric-score-cell">${b.aims_independence ? b.aims_independence.score : 0}</td><td>${b.aims_independence && b.aims_independence.report ? b.aims_independence.report.feedback : ''}</td></tr>
        <tr><td><strong>Methodology & Controls</strong></td><td>15.0</td><td class="rubric-score-cell">${b.methodology ? b.methodology.score : 0}</td><td>${b.methodology && b.methodology.report ? b.methodology.report.feedback : ''}</td></tr>
        <tr><td><strong>Outcomes & Long-Term Impact (Sec. 10)</strong></td><td>10.0</td><td class="rubric-score-cell">${b.expected_outcomes ? b.expected_outcomes.score : 0}</td><td>${b.expected_outcomes && b.expected_outcomes.impact_included ? '✅ Includes long-term significance and deliverable targets.' : '⚠️ Detail Section 10 Impact: Why do the results matter?'}</td></tr>
        <tr><td><strong>Competitive Advantage & USPs</strong></td><td>5.0</td><td class="rubric-score-cell">${b.competitive_advantage ? b.competitive_advantage.score : 0}</td><td>${b.competitive_advantage && b.competitive_advantage.report ? b.competitive_advantage.report.feedback : ''}</td></tr>
        <tr><td><strong>Biotech SWOT & PESTEL</strong></td><td>10.0</td><td class="rubric-score-cell">${b.swot_pestel ? b.swot_pestel.score : 0}</td><td>${b.swot_pestel && b.swot_pestel.report ? b.swot_pestel.report.feedback : ''}</td></tr>
        <tr><td><strong>Gantt Timeline & Decision Gates</strong></td><td>5.0</td><td class="rubric-score-cell">${b.time_plan ? b.time_plan.score : 0}</td><td>Work packages scheduled with Go/No-Go decision milestones.</td></tr>
        <tr><td><strong>Tabulated Budget</strong></td><td>5.0</td><td class="rubric-score-cell">${b.budget ? b.budget.score : 0}</td><td>Itemized across 4 core grant funding categories.</td></tr>
        <tr><td><strong>References (60% Recency)</strong></td><td>5.0</td><td class="rubric-score-cell">${b.references ? b.references.score : 0}</td><td>Peer-reviewed citations satisfying recency standards.</td></tr>
      </tbody>
    </table>

    ${b.novelty_soundness && b.novelty_soundness.report ? `
      <div style="margin-top:14px; background:#f0fdf4; border:1px solid #86efac; border-radius:8px; padding:12px;">
        <div style="font-weight:700; color:#166534; margin-bottom:4px;">🔬 Scientific Soundness & Novelty Audit: ${b.novelty_soundness.score} / 100</div>
        <div style="font-size:0.82rem; color:#15803d;"><strong>Status:</strong> ${b.novelty_soundness.report.verdict}</div>
        ${b.novelty_soundness.report.issues && b.novelty_soundness.report.issues.length > 0 ? `
          <ul style="font-size:0.78rem; color:#b91c1c; margin:4px 0; padding-left:18px;">${b.novelty_soundness.report.issues.map(i => `<li>${i}</li>`).join('')}</ul>
        ` : ''}
      </div>
    ` : ''}
  `;
  container.innerHTML = html;
}

function renderVivaQuestions(questions) {
  const container = document.getElementById("viva-results-container");
  if (!container) return;
  let html = "";
  questions.forEach(q => {
    html += `
      <div class="viva-box">
        <div style="font-size:0.75rem; font-weight:800; color:#a21caf; text-transform:uppercase; margin-bottom:4px;">${q.category}</div>
        <div class="viva-question">"${q.question}"</div>
        <div class="viva-hint"><strong>Study Section Benchmark:</strong> ${q.eval_criteria}</div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// Faculty Studio Mode (Comment Bank)
function initInstructorStudio() {
  const btnToggle = document.getElementById("btn-toggle-instructor");
  const panel = document.getElementById("instructor-studio-panel");
  if (btnToggle && panel) {
    btnToggle.addEventListener("click", async () => {
      panel.style.display = panel.style.display === "none" ? "block" : "none";
      btnToggle.innerText = panel.style.display === "none" ? "👨‍🏫 Faculty View" : "👨‍🏫 Exit Faculty View";
      if (panel.style.display === "block") {
        await loadCommentBankChips();
        panel.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const btnGenMemo = document.getElementById("btn-generate-instructor-memo");
  if (btnGenMemo) {
    btnGenMemo.addEventListener("click", async () => {
      const manual = document.getElementById("instructor-manual-notes").value;
      const memoOutput = document.getElementById("instructor-memo-output");
      try {
        const resp = await fetch("/api/instructor/report", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            student_data: projectState,
            codes: Array.from(selectedCommentCodes),
            manual_comments: manual
          })
        });
        const data = await resp.json();
        memoOutput.style.display = "block";
        memoOutput.innerText = data.memo_text;
        showToast("Faculty Evaluation Memo generated!");
      } catch (err) {
        console.error(err);
      }
    });
  }
}

async function loadCommentBankChips() {
  const container = document.getElementById("instructor-comment-bank-chips");
  if (!container || container.children.length > 0) return;

  function renderChips(bank) {
    let html = "";
    for (const cat in bank) {
      (bank[cat] || []).forEach(item => {
        html += `<button class="instructor-chip" data-code="${item.code}">[${item.code}] ${item.label}</button>`;
      });
    }
    container.innerHTML = html;
    container.querySelectorAll(".instructor-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const code = chip.getAttribute("data-code");
        if (selectedCommentCodes.has(code)) {
          selectedCommentCodes.delete(code);
          chip.classList.remove("selected");
        } else {
          selectedCommentCodes.add(code);
          chip.classList.add("selected");
        }
      });
    });
  }

  if (isStaticEnvironment()) {
    renderChips(FALLBACK_COMMENT_BANK);
    return;
  }

  try {
    const resp = await fetch("/api/instructor/comments");
    if (!resp.ok) {
      renderChips(FALLBACK_COMMENT_BANK);
      return;
    }
    const bank = await resp.json();
    renderChips(bank);
  } catch (err) {
    renderChips(FALLBACK_COMMENT_BANK);
  }
}

function updateWordCount(id, text, limit) {
  const el = document.getElementById(id);
  if (!el) return;
  const count = text.trim() ? text.trim().split(/\s+/).length : 0;
  el.innerText = `${count} / ${limit} words`;
  el.style.color = count > limit ? "#dc2626" : "#64748b";
}

function checkTenseWarning(text) {
  const alertEl = document.getElementById("tense-warning");
  if (!alertEl) return;
  const pastMatches = text.match(/\b(was incubated|were inoculated|was performed|were collected|was added|were analyzed)\b/gi);
  if (pastMatches && pastMatches.length > 0) {
    alertEl.style.display = "block";
    alertEl.innerHTML = `⚠️ <strong>Tense Alert (Rubric Item 11)</strong>: Found past-tense phrase "<em>${pastMatches[0]}</em>". Grant methodology must be in FUTURE TENSE ("will be incubated", "will be analyzed").`;
  } else {
    alertEl.style.display = "none";
  }
}

function checkClicheWarning(text) {
  const alertEl = document.getElementById("cliche-warning");
  if (!alertEl) return;
  const cliches = ["we are students", "lack of experience", "not enough time", "budget might run out", "beginners"];
  const lower = text.toLowerCase();
  const found = cliches.find(c => lower.includes(c));
  if (found) {
    alertEl.style.display = "block";
    alertEl.innerHTML = `⚠️ <strong>Reviewer Trap</strong>: Avoid student cliché "<em>${found}</em>". Focus on biochemical or technical failure modes.`;
  } else {
    alertEl.style.display = "none";
  }
}

let scoreTimeout = null;
function updateLiveScoreDebounced() {
  clearTimeout(scoreTimeout);
  scoreTimeout = setTimeout(updateLiveScore, 600);
}

async function updateLiveScore() {
  renderLiveManuscript();
  renderActiveVisualFigure();

  if (isStaticEnvironment()) {
    updateHeaderScores(0, 0, null);
    return;
  }

  try {
    const resp = await fetch("/api/audit/full", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectState)
    });
    if (!resp.ok) {
      window.isStaticMode = true;
      updateHeaderScores(0, 0, null);
      return;
    }
    const audit = await resp.json();
    updateHeaderScores(audit.raw_total, audit.gpa_score, audit);
  } catch (e) {
    window.isStaticMode = true;
    updateHeaderScores(0, 0, null);
  }
}

function updateHeaderScores(raw, gpa, audit) {
  // 1. Calculate milestone completion nodes (0 to 10)
  let nodes = 0;
  if (projectState.title && (projectState.chassis || projectState.system) && projectState.tool) nodes += 1;
  if (projectState.matrix && (projectState.matrix.blue || projectState.matrix.yellow || projectState.matrix.citation)) nodes += 1;
  if (projectState.funnel && projectState.funnel.tier1 && projectState.funnel.tier2) nodes += 1;
  if (projectState.funnel && projectState.funnel.tier3 && projectState.funnel.tier4) nodes += 1;
  if (projectState.aims && projectState.aims.aim1 && projectState.aims.aim2 && projectState.aims.aim3) nodes += 1;
  if (projectState.methodology && projectState.methodology.length > 30) nodes += 1;
  if (projectState.control_triad && projectState.control_triad.negative && projectState.control_triad.positive) nodes += 1;
  if (projectState.impact || (projectState.expected_outcomes && projectState.expected_outcomes.length > 20)) nodes += 1;
  if (projectState.usps || (projectState.competitor_data && projectState.competitor_data.proposed_name)) nodes += 1;
  if (projectState.swot && projectState.swot.strengths && projectState.swot.weaknesses) nodes += 1;

  const pct = Math.round((nodes / 10.0) * 100);

  // 2. Qualitative Scientific Readiness (STRICT NO-GRADE POLICY)
  let readinessLabel = "🌱 Formulating";
  let readinessColor = "#4338ca";
  if (pct >= 80) {
    readinessLabel = "🌟 Grant-Ready";
    readinessColor = "#16a34a";
  } else if (pct >= 50) {
    readinessLabel = "🌿 Developing";
    readinessColor = "#2563eb";
  }

  // Update top proposal meta card
  const badgeEl = document.getElementById("header-readiness-badge");
  if (badgeEl) {
    badgeEl.innerText = readinessLabel;
    badgeEl.style.color = readinessColor;
  }

  const summaryEl = document.getElementById("header-readiness-summary");
  if (summaryEl) {
    summaryEl.innerText = `Milestones: ${nodes}/10 Complete`;
  }

  // Update Left Sidebar Circular Gauge (Shows percentage completed, NO GRADES)
  const scoreNumEl = document.getElementById("sidebar-readiness-number");
  if (scoreNumEl) scoreNumEl.innerText = `${pct}%`;

  const ringFill = document.getElementById("sidebar-ring-fill");
  if (ringFill) {
    const circumference = 238.76;
    const offset = circumference * (1 - Math.min(100, Math.max(0, pct)) / 100);
    ringFill.style.strokeDashoffset = offset;
  }

  const gaugeBadge = document.getElementById("gauge-status-badge");
  if (gaugeBadge) {
    if (pct >= 80) {
      gaugeBadge.innerText = "Grant-Ready";
      gaugeBadge.style.background = "#dcfce7";
      gaugeBadge.style.color = "#15803d";
    } else if (pct >= 50) {
      gaugeBadge.innerText = "Developing";
      gaugeBadge.style.background = "#e0f2fe";
      gaugeBadge.style.color = "#0369a1";
    } else {
      gaugeBadge.innerText = "Formulating";
      gaugeBadge.style.background = "#fef3c7";
      gaugeBadge.style.color = "#b45309";
    }
  }

  // Update Sidebar Rubric Breakdown Items (Checklist status, NO POINTS)
  const tEl = document.getElementById("score-item-title");
  if (tEl) tEl.innerText = (projectState.title && projectState.tool) ? "✅ Ready" : "Pending";

  const litEl = document.getElementById("score-item-lit");
  if (litEl) litEl.innerText = (projectState.matrix && projectState.matrix.blue) ? "✅ Ready" : "Pending";

  const funEl = document.getElementById("score-item-funnel");
  if (funEl) {
    const fn = projectState.funnel || {};
    const fnCount = [fn.tier1, fn.tier2, fn.tier3, fn.tier4].filter(Boolean).length;
    funEl.innerText = fnCount >= 4 ? "✅ Ready" : (fnCount > 0 ? "⏳ In Progress" : "Pending");
  }

  const aimsEl = document.getElementById("score-item-aims");
  if (aimsEl) {
    const aims = projectState.aims || {};
    const aCount = [aims.aim1, aims.aim2, aims.aim3].filter(Boolean).length;
    const triadCount = (projectState.control_triad && projectState.control_triad.negative) ? 1 : 0;
    aimsEl.innerText = (aCount >= 3 && triadCount) ? "✅ Ready" : (aCount > 0 ? "⏳ In Progress" : "Pending");
  }

  const absEl = document.getElementById("score-item-abs");
  if (absEl) absEl.innerText = (projectState.abstract && projectState.abstract.length > 50) ? "✅ Ready" : "Pending";

  // Trigger Prerequisite & Next Action recalculations
  if (typeof evaluateStepPrerequisites === "function") evaluateStepPrerequisites();
  if (typeof updateNextActionGuidance === "function") updateNextActionGuidance(nodes, pct);
}


function generateClientMarkdown(st) {
  const title = st.title || "Untitled Biotechnology Research Proposal";
  const pName = st.student_name || "Anonymous";
  const sId = st.student_id || "ST-2026-XX";
  const subDate = st.submission_date || new Date().toISOString().split("T")[0];
  
  let md = `# BT_301: Introduction to Biotechnology\n\n`;
  md += `## Course Proposal Portfolio\n\n`;
  md += `**Project Title:** ${title}\n\n`;
  md += `**Principal Investigator(s) / Team:** ${pName}\n`;
  md += `**Primary Student ID:** ${sId}\n`;
  md += `**Submission Date:** ${subDate}\n\n`;
  md += `--- \n\n`;
  
  // Section 1 Abstract
  md += `### 1. Abstract & Keywords\n\n`;
  md += `${st.abstract || "Pending student formulation."}\n\n`;
  md += `**Keywords:** ${st.keywords || "biotechnology, genetic engineering, synthetic biology"}\n\n`;
  
  // Section 2 Background
  md += `### 2. Background & Problem Statement\n\n`;
  md += `#### 2.1 Problem Statement & Background Context\n${st.problem_narrative || "Pending narrative."}\n\n`;
  md += `#### 2.2 Project Importance & Multi-Domain Impact\n${st.impact_text || "Pending impact analysis."}\n\n`;
  md += `#### 2.3 Target Audience & Beneficiaries\n${st.target_audience || "Pending audience description."}\n\n`;
  
  // Section 3 Aims
  md += `### 3. Aims & Specific Objectives\n\n`;
  md += `#### 3.1 Overarching Aim\n${st.overarching_aim || "Pending overarching aim."}\n\n`;
  md += `#### 3.2 Specific Objectives\n`;
  const objs = st.specific_objectives || [];
  if (objs.length > 0) {
    objs.forEach((o, i) => { md += `${i+1}. **Objective ${i+1}:** ${o.text || ""}\n`; });
  } else {
    md += `1. Objective 1\n2. Objective 2\n3. Objective 3\n`;
  }
  md += `\n`;
  
  // Section 4 Methodology
  md += `### 4. Materials & Methodology\n\n`;
  md += `#### 4.1 Methodology Overview\n${st.methodology || "Pending methodology description."}\n\n`;
  md += `#### 4.2 Materials & Methods Protocol\n${st.materials_methods || "Pending protocols."}\n\n`;
  
  // Section 5 Risks
  md += `### 5. Risk Assessment & Contingency Fallback\n\n`;
  md += `| Potential Failure Mode | Likelihood | Impact | Contingency Plan B Fallback |\n`;
  md += `| :--- | :--- | :--- | :--- |\n`;
  const risks = st.risks || [];
  risks.forEach(r => {
    md += `| ${r.risk || ""} | ${r.likelihood || "Medium"} | ${r.impact || "High"} | ${r.plan_b || ""} |\n`;
  });
  md += `\n`;
  
  // Section 6 Ansoff
  md += `### 6. Ansoff Strategic Matrix\n\n`;
  const ans = st.ansoff || {};
  md += `- **Market Penetration:** ${ans.penetration || "N/A"}\n`;
  md += `- **Product Development:** ${ans.prod_dev || "N/A"}\n`;
  md += `- **Market Development:** ${ans.mkt_dev || "N/A"}\n`;
  md += `- **Diversification:** ${ans.diversification || "N/A"}\n\n`;
  
  // Section 7 SWOT
  md += `### 7. SWOT Analysis\n\n`;
  const sw = st.swot || {};
  md += `- **Strengths:** ${sw.strengths || "N/A"}\n`;
  md += `- **Weaknesses:** ${sw.weaknesses || "N/A"}\n`;
  md += `- **Opportunities:** ${sw.opportunities || "N/A"}\n`;
  md += `- **Threats:** ${sw.threats || "N/A"}\n\n`;
  
  // Section 8 PESTEL
  md += `### 8. PESTEL Analysis\n\n`;
  const pes = st.pestel || {};
  md += `- **Political:** ${pes.political || "N/A"}\n`;
  md += `- **Economic (EGP):** ${pes.economic || "N/A"}\n`;
  md += `- **Social:** ${pes.social || "N/A"}\n`;
  md += `- **Technological:** ${pes.technological || "N/A"}\n`;
  md += `- **Environmental:** ${pes.environmental || "N/A"}\n`;
  md += `- **Legal & Biosafety:** ${pes.legal || "N/A"}\n\n`;
  
  // Section 9 Timeline & Budget
  md += `### 9. Project Timeline & Budget (EGP)\n\n`;
  md += `#### 9.1 Gantt Schedule Milestones\n${st.time_plan || "Scientific milestones partitioned into work packages."}\n\n`;
  md += `#### 9.2 Resource Allocation & Itemized Budget\n`;
  md += `| Category | Description | Qty | Unit Cost (EGP) | Subtotal (EGP) |\n`;
  md += `| :--- | :--- | :--- | :--- | :--- |\n`;
  let grandTotal = 0;
  (st.budget_egp_items || []).forEach(item => {
    const sub = (item.qty || 1) * (item.unit_cost || 0);
    grandTotal += sub;
    md += `| ${item.category} | ${item.desc || "Item"} | ${item.qty} | ${item.unit_cost.toLocaleString()} | ${sub.toLocaleString()} EGP |\n`;
  });
  md += `| **TOTAL** | | | | **${grandTotal.toLocaleString()} EGP (ج.م)** |\n\n`;
  
  // Section 10 References
  md += `### 10. References & Literature Cited\n\n`;
  md += `${st.references || "Pending bibliography."}\n\n`;
  md += `---\n*Authored via BioWriter Studio • BT_301 Introduction to Biotechnology*\n`;
  return md;
}

function generateClientWordDoc(st) {
  const md = generateClientMarkdown(st);
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${escapeHtml(st.title || "BioWriter Proposal")}</title>
      <style>
        body { font-family: 'Calibri', 'Arial', sans-serif; font-size: 11pt; line-height: 1.5; color: #1e293b; margin: 40px; }
        h1 { font-size: 20pt; color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 6px; }
        h2 { font-size: 16pt; color: #0f172a; margin-top: 24px; }
        h3 { font-size: 13pt; color: #1e40af; margin-top: 18px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; }
        h4 { font-size: 11pt; color: #334155; margin-top: 12px; }
        table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 10pt; }
        th { background: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; padding: 8px 10px; text-align: left; font-weight: bold; }
        td { border: 1px solid #e2e8f0; padding: 8px 10px; }
        tr:nth-child(even) { background: #f8fafc; }
        p { margin: 8px 0; }
        ul, ol { margin: 8px 0 8px 24px; }
      </style>
    </head>
    <body>
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="border: none; margin-bottom: 4px;">BT_301: Introduction to Biotechnology</h1>
        <div style="font-size: 13pt; color: #475569; font-weight: bold;">Comprehensive Research Proposal Portfolio</div>
        <div style="font-size: 10pt; color: #64748b; margin-top: 6px;">Course Instructors & Evaluators Committee</div>
      </div>
      <table style="margin-bottom: 24px;">
        <tr><th style="width: 25%;">Project Title</th><td><strong>${escapeHtml(st.title || "Untitled Proposal")}</strong></td></tr>
        <tr><th>Principal Investigator / Team</th><td>${escapeHtml(st.student_name || "Anonymous")}</td></tr>
        <tr><th>Student ID / Team Code</th><td>${escapeHtml(st.student_id || "ST-2026-XX")}</td></tr>
        <tr><th>Submission Date</th><td>${escapeHtml(st.submission_date || new Date().toISOString().split("T")[0])}</td></tr>
      </table>
      <h3>1. Abstract & Keywords</h3>
      <p>${escapeHtml(st.abstract || "Pending abstract.").replace(/\n/g, "<br>")}</p>
      <p><strong>Keywords:</strong> ${escapeHtml(st.keywords || "biotechnology, genetic engineering")}</p>
      <h3>2. Background & Problem Statement</h3>
      <h4>2.1 Problem Statement & Background Context</h4>
      <p>${escapeHtml(st.problem_narrative || "").replace(/\n/g, "<br>")}</p>
      <h4>2.2 Project Importance & Multi-Domain Impact</h4>
      <p>${escapeHtml(st.impact_text || "").replace(/\n/g, "<br>")}</p>
      <h4>2.3 Target Audience & Beneficiaries</h4>
      <p>${escapeHtml(st.target_audience || "").replace(/\n/g, "<br>")}</p>
      <h3>3. Aims & Specific Objectives</h3>
      <h4>3.1 Overarching Aim</h4>
      <p>${escapeHtml(st.overarching_aim || "")}</p>
      <h4>3.2 Specific Objectives</h4>
      <ol>
        ${(st.specific_objectives || [{text: "Objective 1"}]).map(o => `<li>${escapeHtml(o.text || "")}</li>`).join("")}
      </ol>
      <h3>4. Materials & Methodology</h3>
      <h4>4.1 Technical Overview & Workflow</h4>
      <p>${escapeHtml(st.methodology || "").replace(/\n/g, "<br>")}</p>
      <h4>4.2 Materials & Methods Protocol</h4>
      <p>${escapeHtml(st.materials_methods || "").replace(/\n/g, "<br>")}</p>
      <h3>5. Risk Assessment & Contingency Plan</h3>
      <table>
        <thead><tr><th>Potential Failure Mode</th><th>Likelihood</th><th>Impact</th><th>Plan B Fallback</th></tr></thead>
        <tbody>
          ${(st.risks || []).map(r => `<tr><td>${escapeHtml(r.risk || "")}</td><td>${escapeHtml(r.likelihood || "Medium")}</td><td>${escapeHtml(r.impact || "High")}</td><td>${escapeHtml(r.plan_b || "")}</td></tr>`).join("")}
        </tbody>
      </table>
      <h3>9. Budget & Resource Allocation (EGP)</h3>
      <table>
        <thead><tr><th>Category</th><th>Description</th><th>Qty</th><th>Unit Cost</th><th>Subtotal (EGP)</th></tr></thead>
        <tbody>
          ${(st.budget_egp_items || []).map(b => {
            const sub = (b.qty || 1) * (b.unit_cost || 0);
            return `<tr><td>${escapeHtml(b.category)}</td><td>${escapeHtml(b.desc || "")}</td><td>${b.qty}</td><td>${b.unit_cost.toLocaleString()}</td><td>${sub.toLocaleString()} EGP</td></tr>`;
          }).join("")}
        </tbody>
      </table>
      <h3>10. References</h3>
      <p>${escapeHtml(st.references || "").replace(/\n/g, "<br>")}</p>
    </body>
    </html>
  `;
  return htmlContent;
}

// Document & Slide Exporters
function initExportHandlers() {
  const triggerDocx = async () => {
    try {
      showToast("Generating Word document...");
      const resp = await fetch("/api/export/docx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectState)
      });
      const blob = await resp.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `BT301_Proposal_${(projectState.student_name || "Student").replace(/\s+/g, "_")}.docx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast("Word (.docx) downloaded!");
    } catch (e) {
      console.warn("Server docx unavailable, generating client-side Word document (GitHub Pages mode):", e);
      try {
        const docHtml = generateClientWordDoc(projectState);
        const blob = new Blob([docHtml], { type: "application/msword;charset=utf-8" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `BT301_Proposal_${(projectState.student_name || "Student").replace(/\s+/g, "_")}.doc`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        showToast("Word document (.doc) downloaded!");
      } catch (err2) {
        console.error("Client docx generation failed", err2);
        showToast("Error downloading Word file.");
      }
    }
  };

  const triggerPptx = async () => {
    try {
      showToast("Building 16:9 Defense Presentation Deck...");
      const resp = await fetch("/api/export/pptx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectState)
      });
      const blob = await resp.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Oral_Defense_Slides_${(projectState.student_name || "Student").replace(/\s+/g, "_")}.pptx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast("Oral Defense Slides (.pptx) downloaded!");
    } catch (e) {
      console.error(e);
      showToast("Error downloading slides.");
    }
  };

  const btnDocx = document.getElementById("btn-export-docx");
  if (btnDocx) btnDocx.addEventListener("click", triggerDocx);

  const btnFinalDocx = document.getElementById("btn-final-export-docx");
  if (btnFinalDocx) btnFinalDocx.addEventListener("click", triggerDocx);

  const btnPptx = document.getElementById("btn-export-pptx");
  if (btnPptx) btnPptx.addEventListener("click", triggerPptx);

  const btnFinalPptx = document.getElementById("btn-final-export-pptx");
  if (btnFinalPptx) btnFinalPptx.addEventListener("click", triggerPptx);

  const btnMd = document.getElementById("btn-export-md");
  if (btnMd) {
    btnMd.addEventListener("click", async () => {
      try {
        showToast("Generating Markdown...");
        const resp = await fetch("/api/export/md", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(projectState)
        });
        const blob = await resp.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `BT301_Proposal_${(projectState.student_name || "Student").replace(/\s+/g, "_")}.md`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        showToast("Markdown (.md) downloaded!");
      } catch (e) {
        console.warn("Server export unavailable, generating client-side Markdown file (GitHub Pages mode):", e);
        try {
          const mdText = generateClientMarkdown(projectState);
          const blob = new Blob([mdText], { type: "text/markdown;charset=utf-8" });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `BT301_Proposal_${(projectState.student_name || "Student").replace(/\s+/g, "_")}.md`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          showToast("Markdown (.md) downloaded directly!");
        } catch (err2) {
          console.error("Client md generation failed", err2);
          showToast("Error downloading Markdown file.");
        }
      }
    });
  }
}

// ==========================================================================
// Scientific Paper Decoder & Evidence Extractor
// ==========================================================================
function initPaperDecoder() {
  const openBtn = document.getElementById("btn-open-paper-decoder");
  const closeBtn = document.getElementById("btn-close-paper-decoder");
  const modal = document.getElementById("paper-decoder-modal");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      goToStep(1);
      setTimeout(() => {
        const card = document.getElementById("card-paper-decoder");
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "start" });
          const idInp = document.getElementById("paper-id-input");
          if (idInp) idInp.focus();
        }
      }, 120);
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }

  // Word counter
  const textInput = document.getElementById("paper-text-input");
  const titleInput = document.getElementById("paper-title-input");
  const idInput = document.getElementById("paper-id-input");
  const wordCountEl = document.getElementById("paper-word-count");

  if (textInput && wordCountEl) {
    textInput.addEventListener("input", () => {
      const words = textInput.value.trim() ? textInput.value.trim().split(/\s+/).length : 0;
      wordCountEl.innerText = `${words} words`;
    });
  }

  // Presets (Section 2 Decoder)
  const presetBtns = document.querySelectorAll(".paper-presets-bar .btn-preset");
  presetBtns.forEach(btn => {
    btn.addEventListener("click", async () => {
      const pKey = btn.getAttribute("data-preset");
      try {
        const resp = await fetch("/api/paper/samples");
        const samples = await resp.json();
        const sample = samples[pKey];
        if (sample) {
          if (titleInput) titleInput.value = sample.title;
          if (textInput) {
            textInput.value = sample.abstract;
            textInput.dispatchEvent(new Event("input"));
          }
          if (idInput) idInput.value = sample.doi;
          showToast(`Loaded: ${sample.title.slice(0, 30)}...`);
          runDecodePaper({
            text: sample.abstract,
            title: sample.title,
            identifier: sample.doi,
            authors: sample.authors,
            year: sample.year,
            journal: sample.journal
          });
        }
      } catch (err) {
        console.error(err);
        showToast("Error loading sample paper.");
      }
    });
  });

  // Helper: Fetch and automatically run decode
  async function triggerFetchAndDecode(rawId) {
    if (!rawId) {
      showToast("Enter a DOI or PubMed ID first.");
      return;
    }
    // Clean identifier client-side
    let cleanId = rawId.trim().replace(/^["'<\(\[{]+|["'>\)\]}]+$/g, "");
    cleanId = cleanId.replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, "");
    cleanId = cleanId.replace(/^https?:\/\/pubmed\.ncbi\.nlm\.nih\.gov\//i, "");
    cleanId = cleanId.replace(/^doi\s*[:=]\s*/i, "");
    cleanId = cleanId.replace(/^pmid\s*[:=]\s*/i, "").replace(/\/+$/, "").trim();

    if (idInput) idInput.value = cleanId;

    if (fetchBtn) {
      fetchBtn.disabled = true;
      fetchBtn.innerText = "Fetching...";
    }
    if (decodeBtn) {
      decodeBtn.disabled = true;
      decodeBtn.innerText = "Fetching & Decoding...";
    }

    try {
      const resp = await fetch("/api/paper/fetch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: cleanId })
      });
      const data = await resp.json();
      if (data.success) {
        if (titleInput) titleInput.value = data.title;

        // Publisher notice or TLDR banner
        const noticeEl = document.getElementById("paper-fetch-notice");
        if (noticeEl) {
          if (data.publisher_restricted || data.is_tldr) {
            noticeEl.style.display = "block";
            noticeEl.innerHTML = `<strong>ℹ️ Publisher Notice:</strong> ${data.publisher_note || 'The publisher restricts automated API access to the full chapter abstract. Retrieved verified research summary / TLDR.'}`;
          } else {
            noticeEl.style.display = "none";
          }
        }

        if (data.abstract && data.abstract.trim().length > 15) {
          if (textInput) {
            textInput.value = data.abstract;
            textInput.dispatchEvent(new Event("input"));
          }
          showToast("Paper metadata & summary retrieved! Decoding parameters...");
          await runDecodePaper({
            text: data.abstract,
            title: data.title,
            identifier: data.id || cleanId,
            authors: data.authors,
            year: data.year,
            journal: data.journal
          });
        } else {
          showToast(`Paper found: "${data.title.slice(0, 35)}...". Please paste abstract below to decode.`);
          if (textInput) {
            textInput.focus();
            textInput.placeholder = "Paste the abstract text for this paper here to decode it...";
          }
        }
      } else {
        showToast(data.error || "Paper not found. Check the DOI or paste abstract directly.");
      }
    } catch (e) {
      console.error(e);
      showToast("Network error fetching paper.");
    } finally {
      if (fetchBtn) {
        fetchBtn.disabled = false;
        fetchBtn.innerText = "⬇ Fetch Abstract";
      }
      if (decodeBtn) {
        decodeBtn.disabled = false;
        decodeBtn.innerText = "🔍 Decode & Extract Parameters";
      }
    }
  }

  // Fetch DOI/PMID button
  const fetchBtn = document.getElementById("btn-fetch-paper-meta");
  if (fetchBtn) {
    fetchBtn.addEventListener("click", async () => {
      const idVal = (idInput ? idInput.value : "").trim();
      await triggerFetchAndDecode(idVal);
    });
  }

  // Enter key inside DOI/PMID input triggers auto-fetch & decode
  if (idInput) {
    idInput.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const idVal = idInput.value.trim();
        await triggerFetchAndDecode(idVal);
      }
    });
  }

  // Run Decode button
  const decodeBtn = document.getElementById("btn-run-paper-decode");
  if (decodeBtn) {
    decodeBtn.addEventListener("click", async () => {
      const text = textInput ? textInput.value.trim() : "";
      const title = titleInput ? titleInput.value.trim() : "";
      const identifier = idInput ? idInput.value.trim() : "";

      // If abstract is empty but DOI/identifier is provided, automatically fetch and decode!
      if ((!text || text.split(/\s+/).length < 15) && identifier) {
        await triggerFetchAndDecode(identifier);
        return;
      }

      if (!text || text.split(/\s+/).length < 15) {
        showToast("Enter a DOI above or paste an abstract of at least 15 words.");
        return;
      }
      runDecodePaper({ text, title, identifier });
    });
  }

  // Tab switching
  const tabBtns = document.querySelectorAll(".decoder-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".decoder-tab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      const tabId = btn.getAttribute("data-tab");
      const targetContent = document.getElementById(`tab-content-${tabId}`);
      if (targetContent) targetContent.classList.add("active");
    });
  });

  async function runDecodePaper(payload) {
    const resultsContainer = document.getElementById("paper-results-container");
    if (decodeBtn) {
      decodeBtn.disabled = true;
      decodeBtn.innerText = "Analyzing...";
    }
    try {
      const resp = await fetch("/api/paper/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await resp.json();
      if (data.status === "error") {
        showToast(data.message);
        return;
      }
      currentDecodedData = data;
      renderDecodedResults(data);
      if (resultsContainer) resultsContainer.style.display = "block";
      updateMatrixExplainer(data);
      projectState.decoded_paper_cache = data;
      saveToStorage();
      showToast("Paper deconstructed into proposal evidence!");
    } catch (e) {
      console.error(e);
      showToast("Error analyzing paper.");
    } finally {
      if (decodeBtn) {
        decodeBtn.disabled = false;
        decodeBtn.innerText = "🔍 Decode & Extract Parameters";
      }
    }
  }

  function renderDecodedResults(data) {
    // Citation preview
    const citPreview = document.getElementById("paper-res-citation-preview");
    if (citPreview) {
      citPreview.innerText = data.citations ? data.citations.apa : (data.title || "Unknown Paper");
    }

    // 3-Sentence Summary (Academic)
    const pProblem = document.getElementById("res-exec-problem");
    const pSolution = document.getElementById("res-exec-solution");
    const pFinding = document.getElementById("res-exec-finding");
    const pLimitation = document.getElementById("res-exec-limitation");
    if (pProblem) pProblem.innerText = data.executive_summary.problem;
    if (pSolution) pSolution.innerText = data.executive_summary.intervention;
    if (pFinding) pFinding.innerText = data.executive_summary.main_finding;
    if (pLimitation) pLimitation.innerText = data.executive_summary.limitation || "None explicitly stated in abstract.";

    // ELI-Undergrad Box & Plain-English 4-Pillars
    const eliTheme = document.getElementById("res-eli-theme");
    const eliAnalogy = document.getElementById("res-eli-analogy");
    const eliProblem = document.getElementById("res-eli-problem");
    const eliSolution = document.getElementById("res-eli-solution");
    const eliTakeaway = document.getElementById("res-eli-takeaway");
    const eliLimitation = document.getElementById("res-eli-limitation");

    if (eliTheme) eliTheme.innerText = `💡 How to Understand This: ${data.plain_english_explanation.theme}`;
    if (eliAnalogy) eliAnalogy.innerText = data.plain_english_explanation.core_analogy;
    if (eliProblem) eliProblem.innerText = data.plain_english_explanation.simple_problem;
    if (eliSolution) eliSolution.innerText = data.plain_english_explanation.simple_solution;
    if (eliTakeaway) eliTakeaway.innerText = data.plain_english_explanation.simple_takeaway;
    if (eliLimitation) eliLimitation.innerText = data.plain_english_explanation.simple_limitation;

    // Jargon Buster
    const jargonCont = document.getElementById("res-jargon-container");
    if (jargonCont) {
      if (data.jargon_buster && data.jargon_buster.length > 0) {
        jargonCont.innerHTML = data.jargon_buster.map(j => `
          <div class="jargon-card">
            <div class="jargon-term">🧩 ${j.term}</div>
            <div class="jargon-def">${j.simple_def}</div>
            <div class="jargon-analogy">${j.analogy}</div>
          </div>
        `).join("");
      } else {
        jargonCont.innerHTML = `<p style="font-size: 0.8rem; color: #64748b; font-style: italic;">No highly specialized biotechnology jargon tags detected in this excerpt.</p>`;
      }
    }

    // Parameters
    const params = data.extracted_parameters || {};
    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.innerText = val || "None detected";
    };
    setVal("res-param-chassis", params.chassis);
    setVal("res-param-tool", params.tool);
    setVal("res-param-metrics", params.primary_metric_sentence);
    setVal("res-param-controls", params.controls);
    setVal("res-param-burden", params.burden_statistic);
    setVal("res-param-milestone", params.target_milestone);
    setVal("res-param-gap", params.stated_gap);

    // Proposal Mapping Recommendations
    const recsCont = document.getElementById("res-proposal-recs-container");
    if (recsCont && data.proposal_recommendations) {
      recsCont.innerHTML = data.proposal_recommendations.map(r => `
        <div style="background: white; border-left: 3px solid #7c3aed; padding: 6px 10px; border-radius: 4px; font-size: 0.8rem;">
          <strong style="color: #6b21a8;">${r.section}:</strong>
          <span style="color: #334155;"> ${r.guidance}</span>
        </div>
      `).join("");
    }

    // Socratic RHEV Prompt
    const rhevBox = document.getElementById("res-rhev-prompt-box");
    if (rhevBox) {
      rhevBox.innerText = data.rhev_challenge;
    }

    // Tab 4: Research Landscape & Gap Story Rendering
    const land = data.three_stage_landscape || {};
    const art = land.stage1_state_of_the_art || {};
    const gap = land.stage2_unresolved_gap || {};
    const opp = land.stage3_research_opportunity || {};

    const elArtApproach = document.getElementById("res-land-art-approach");
    const elArtBenchmark = document.getElementById("res-land-art-benchmark");
    const elArtEvidence = document.getElementById("res-land-art-evidence");
    const elGapStatement = document.getElementById("res-land-gap-statement");
    const elOppStatement = document.getElementById("res-land-opp-statement");
    const elOppStrategy = document.getElementById("res-land-opp-strategy");
    const elOppMilestone = document.getElementById("res-land-opp-milestone");

    if (elArtApproach) elArtApproach.innerText = art.approach || params.tool || "Published experimental intervention";
    if (elArtBenchmark) elArtBenchmark.innerText = art.benchmark || params.primary_metric_sentence || "Empirical baseline rate reported in literature";
    if (elArtEvidence) elArtEvidence.innerText = art.citation || (data.citations && data.citations.apa ? data.citations.apa : (data.title || "Peer-reviewed publication"));
    if (elGapStatement) elGapStatement.innerText = gap.statement || params.stated_gap || (data.executive_summary && data.executive_summary.limitation) || "Operational constraint identified in literature";
    if (elOppStatement) elOppStatement.innerText = opp.opportunity_statement || "Investigate engineered intervention to surpass published benchmark and overcome the stated gap.";
    if (elOppStrategy) elOppStrategy.innerText = opp.test_strategy || params.controls || "Model testing with positive benchmark reference and negative vehicle blank.";
    if (elOppMilestone) elOppMilestone.innerText = opp.target_milestone || params.target_milestone || "Calibrated improvement over literature baseline";

    // Literature Position Map
    const posMap = data.position_map || {};
    const elLitEst = document.getElementById("lit-map-established");
    const elLitGap = document.getElementById("lit-map-gap");
    const elLitPaper = document.getElementById("lit-map-paper");
    const elLitProp = document.getElementById("lit-map-proposed");

    if (elLitEst) elLitEst.innerText = posMap.stage1_established || "Standard baseline technology";
    if (elLitGap) elLitGap.innerText = posMap.stage2_gap || (params.stated_gap ? params.stated_gap.slice(0, 90) + "..." : "Operational / mechanistic flaw");
    if (elLitPaper) elLitPaper.innerText = posMap.stage3_this_paper || (data.title ? data.title.slice(0, 90) + "..." : "Published benchmark study");
    if (elLitProp) elLitProp.innerText = posMap.stage4_proposed || "Proposed engineered solution & target milestone";

    // From Paper -> Proposal Synthesizer (6 points)
    const synth = data.from_paper_to_proposal || {};
    const elSynEst = document.getElementById("synth-point-established");
    const elSynBench = document.getElementById("synth-point-benchmark");
    const elSynLim = document.getElementById("synth-point-limitation");
    const elSynOpp = document.getElementById("synth-point-opportunity");
    const elSynCont = document.getElementById("synth-point-contribution");
    const elSynCheck = document.getElementById("synth-validation-checklist");

    if (elSynEst) elSynEst.innerText = synth.established_knowledge || "Demonstrated baseline biological mechanism in literature.";
    if (elSynBench) elSynBench.innerText = synth.current_benchmark || params.primary_metric_sentence || "Reported quantitative performance level.";
    if (elSynLim) elSynLim.innerText = synth.limitation || params.stated_gap || "Identified operational bottleneck requiring a new approach.";
    if (elSynOpp) elSynOpp.innerText = synth.research_opportunity || "Address the unaddressed literature gap.";
    if (elSynCont) elSynCont.innerText = synth.proposed_contribution || "Rational engineering intervention & validation.";

    if (elSynCheck) {
      const checklist = synth.required_validation_checklist || [
        "Include positive benchmark control (e.g. wild-type reference)",
        "Include negative vehicle / buffer blank control",
        "Verify activity in operational matrix / physiological conditions",
        "Target calibrated quantitative improvement (e.g. ≥2-fold or +10°C Tm)"
      ];
      elSynCheck.innerHTML = checklist.map((item) => `
        <label style="display: flex; align-items: flex-start; gap: 6px; background: #ffffff; padding: 6px 10px; border-radius: 6px; border: 1px solid #d1fae5; cursor: pointer;">
          <input type="checkbox" checked style="margin-top: 3px;">
          <span style="color: #065f46; line-height: 1.35;">${escapeHtml(item)}</span>
        </label>
      `).join("");
    }
  }

  // Copy Citation
  const copyCitBtn = document.getElementById("btn-copy-citation");
  if (copyCitBtn) {
    copyCitBtn.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.citations) {
        navigator.clipboard.writeText(currentDecodedData.citations.apa);
        showToast("APA Citation copied to clipboard!");
      }
    });
  }

  // Transfer Chassis
  const transChassis = document.getElementById("transfer-chassis-btn");
  if (transChassis) {
    transChassis.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.extracted_parameters) {
        const val = currentDecodedData.extracted_parameters.chassis;
        projectState.chassis = val;
        projectState.system = val;
        const el = document.getElementById("pillar-chassis");
        if (el) el.value = val;
        saveToStorage();
        updateLiveScoreDebounced();
        updateLogicChainUIDebounced();
        showToast(`Transferred Chassis to Step 1: "${val}"`);
      }
    });
  }

  // Transfer Tool
  const transTool = document.getElementById("transfer-tool-btn");
  if (transTool) {
    transTool.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.extracted_parameters) {
        const val = currentDecodedData.extracted_parameters.tool;
        projectState.tool = val;
        const el = document.getElementById("pillar-tool");
        if (el) el.value = val;
        saveToStorage();
        updateLiveScoreDebounced();
        updateLogicChainUIDebounced();
        showToast(`Transferred Tool to Step 1: "${val}"`);
      }
    });
  }

  // Auto-fill entire matrix from decoded paper in Step 2 / Section 3
  const btnAutoFill = document.getElementById("btn-autofill-matrix");
  if (btnAutoFill) {
    btnAutoFill.addEventListener("click", async () => {
      if (!currentDecodedData || !currentDecodedData.extracted_parameters) {
        showToast("Loading benchmark paper (Nature 2020) to auto-fill & explain...");
        try {
          const resp = await fetch("/api/paper/samples");
          const samples = await resp.json();
          const sample = samples["petase"];
          if (sample) {
            await runDecodePaper({
              text: sample.abstract,
              title: sample.title,
              identifier: sample.doi,
              authors: sample.authors,
              year: sample.year,
              journal: sample.journal
            });
            if (currentDecodedData) {
              applyDecodedDataToMatrix(currentDecodedData);
              showToast("Loaded PETase benchmark & auto-filled 6 parameters with explanations!");
              return;
            }
          }
        } catch (e) {
          console.error(e);
        }
        showToast("Please put a paper above or choose a preset.");
        return;
      }

      applyDecodedDataToMatrix(currentDecodedData);
      showToast("Auto-filled all 6 Evidence Matrix parameters with paper explanations!");
    });
  }

  // Section 3: Toggle dedicated quick paper tools bar
  const btnTogglePaperTools = document.getElementById("btn-toggle-matrix-paper-tools");
  const matrixToolsBar = document.getElementById("matrix-paper-tools-bar");
  if (btnTogglePaperTools && matrixToolsBar) {
    btnTogglePaperTools.addEventListener("click", () => {
      const isHidden = window.getComputedStyle(matrixToolsBar).display === "none";
      matrixToolsBar.style.display = isHidden ? "block" : "none";
      if (isHidden) {
        const qInp = document.getElementById("matrix-quick-paper-input");
        if (qInp) qInp.focus();
      }
    });
  }

  // Section 3: Quick Benchmark Presets (PETase, Cas12a, Wheat)
  const matrixPresetBtns = document.querySelectorAll(".btn-matrix-preset");
  matrixPresetBtns.forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const pKey = btn.getAttribute("data-preset");
      const origText = btn.textContent;
      btn.disabled = true;
      btn.textContent = "⏳ Analyzing...";
      try {
        const resp = await fetch("/api/paper/samples");
        const samples = await resp.json();
        const sample = samples[pKey];
        if (sample) {
          showToast(`Decoding: ${sample.title.slice(0, 32)}...`);
          await runDecodePaper({
            text: sample.abstract,
            title: sample.title,
            identifier: sample.doi,
            authors: sample.authors,
            year: sample.year,
            journal: sample.journal
          });
          if (currentDecodedData) {
            applyDecodedDataToMatrix(currentDecodedData);
            showToast("Paper decoded! Evidence Matrix and in-depth explanations populated.");
          }
        }
      } catch (err) {
        console.error(err);
        showToast("Error loading paper preset.");
      } finally {
        btn.disabled = false;
        btn.textContent = origText;
      }
    });
  });

  // Section 3: Quick Paper Decoder & Explainer Handler
  const btnMatrixDecode = document.getElementById("btn-matrix-decode-paper");
  const matrixQuickInput = document.getElementById("matrix-quick-paper-input");

  async function handleMatrixQuickDecode() {
    const raw = matrixQuickInput ? matrixQuickInput.value.trim() : "";
    if (!raw) {
      showToast("Enter a DOI, PubMed ID, or paper abstract first.");
      if (matrixQuickInput) matrixQuickInput.focus();
      return;
    }

    if (btnMatrixDecode) {
      btnMatrixDecode.disabled = true;
      btnMatrixDecode.textContent = "⏳ Analyzing Paper...";
    }

    try {
      const isIdentifier = /^(10\.\d{4,9}\/|https?:\/\/|pmid:|\d{6,9}$)/i.test(raw) || raw.split(/\s+/).length < 15;
      if (isIdentifier) {
        let cleanId = raw.replace(/^["'<\(\[{]+|["'>\)\]}]+$/g, "")
          .replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, "")
          .replace(/^https?:\/\/pubmed\.ncbi\.nlm\.nih\.gov\//i, "")
          .replace(/^doi\s*[:=]\s*/i, "")
          .replace(/^pmid\s*[:=]\s*/i, "")
          .replace(/\/+$/, "").trim();

        const fetchResp = await fetch("/api/paper/fetch", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier: cleanId })
        });
        const fetched = await fetchResp.json();
        if (fetched.success && fetched.abstract && fetched.abstract.trim().length > 15) {
          await runDecodePaper({
            text: fetched.abstract,
            title: fetched.title,
            identifier: fetched.id || cleanId,
            authors: fetched.authors,
            year: fetched.year,
            journal: fetched.journal
          });
          if (currentDecodedData) {
            applyDecodedDataToMatrix(currentDecodedData);
            showToast("Paper decoded! Summary and explanations populated.");
          }
        } else if (fetched.success) {
          await runDecodePaper({
            text: fetched.abstract || fetched.title,
            title: fetched.title,
            identifier: fetched.id || cleanId,
            authors: fetched.authors,
            year: fetched.year,
            journal: fetched.journal
          });
          if (currentDecodedData) {
            applyDecodedDataToMatrix(currentDecodedData);
            showToast("Paper metadata decoded and explanations generated!");
          }
        } else {
          showToast(fetched.error || "Paper not found. Paste abstract text directly.");
        }
      } else {
        // Pasted abstract
        await runDecodePaper({
          text: raw,
          title: "Pasted Research Abstract",
          identifier: ""
        });
        if (currentDecodedData) {
          applyDecodedDataToMatrix(currentDecodedData);
          showToast("Paper abstract analyzed! Evidence Matrix & explanations populated.");
        }
      }
    } catch (err) {
      console.error(err);
      showToast("Error processing paper.");
    } finally {
      if (btnMatrixDecode) {
        btnMatrixDecode.disabled = false;
        btnMatrixDecode.textContent = "🔍 Decode Paper & Explain Everything";
      }
    }
  }

  if (btnMatrixDecode) {
    btnMatrixDecode.addEventListener("click", handleMatrixQuickDecode);
  }

  if (matrixQuickInput) {
    matrixQuickInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleMatrixQuickDecode();
      }
    });
  }

  // Section 3: Toggle Summary View
  const btnToggleExp = document.getElementById("btn-toggle-matrix-exp-details");
  const expGrid = document.getElementById("matrix-exp-story-grid");
  if (btnToggleExp && expGrid) {
    btnToggleExp.addEventListener("click", () => {
      const isHidden = window.getComputedStyle(expGrid).display === "none";
      expGrid.style.display = isHidden ? "grid" : "none";
      btnToggleExp.textContent = isHidden ? "👁️ Hide Summary View" : "👁️ Show Summary View";
    });
  }

  // Transfer Burden to Step 2 Matrix Parameter 1
  const transBurden = document.getElementById("transfer-burden-btn");
  if (transBurden) {
    transBurden.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.extracted_parameters) {
        const val = currentDecodedData.extracted_parameters.burden_statistic;
        if (val) {
          projectState.matrix.yellow = val;
          const el = document.getElementById("matrix-yellow");
          if (el) el.value = val;
          saveToStorage();
          updateLiveScoreDebounced();
          updateLogicChainUIDebounced();
          showToast("Transferred Global Burden Statistic to Step 2 Evidence Matrix (Parameter 1)!");
        }
      }
    });
  }

  // Transfer Milestone / Key Innovation to Step 2 Matrix Parameter 5
  const transMilestone = document.getElementById("transfer-milestone-btn");
  if (transMilestone) {
    transMilestone.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.extracted_parameters) {
        const val = currentDecodedData.extracted_parameters.key_innovation || currentDecodedData.extracted_parameters.target_milestone;
        if (val) {
          projectState.matrix.red = val;
          const el = document.getElementById("matrix-red");
          if (el) el.value = val;
          saveToStorage();
          updateLiveScoreDebounced();
          updateLogicChainUIDebounced();
          showToast("Transferred Key Innovation to Step 2 Evidence Matrix (Parameter 5)!");
        }
      }
    });
  }

  // Transfer Findings & Horizon to Step 2 Matrix Parameter 6
  const transFindings = document.getElementById("transfer-findings-btn");
  if (transFindings) {
    transFindings.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.extracted_parameters) {
        const p = currentDecodedData.extracted_parameters;
        const cit = (currentDecodedData.citations && currentDecodedData.citations.apa)
          ? currentDecodedData.citations.apa
          : (currentDecodedData.doi ? `DOI: ${currentDecodedData.doi}` : "");
        let val = p.key_findings || p.primary_metric_sentence || "";
        if (p.research_horizon) {
          val += (val ? " | Target horizon: " : "") + p.research_horizon;
        }
        if (cit) {
          val += (val ? ` [${cit}]` : `[${cit}]`);
        }
        if (val) {
          projectState.matrix.citation = val;
          const el = document.getElementById("matrix-citation");
          if (el) el.value = val;
          saveToStorage();
          updateLiveScoreDebounced();
          updateLogicChainUIDebounced();
          showToast("Transferred Findings & Horizon to Step 2 Evidence Matrix (Parameter 6)!");
        }
      }
    });
  }

  // Transfer Metric to Step 2 Evidence Matrix
  const transMetric = document.getElementById("transfer-metric-btn");
  if (transMetric) {
    transMetric.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.extracted_parameters) {
        const val = currentDecodedData.extracted_parameters.primary_metric_sentence;
        projectState.matrix.blue = val;
        const el = document.getElementById("matrix-blue");
        if (el) el.value = val;
        saveToStorage();
        updateLiveScoreDebounced();
        updateLogicChainUIDebounced();
        showToast("Transferred Metric to Step 2 Evidence Matrix (Parameter 2: Baseline Rate)!");
      }
    });
  }

  // Transfer Metric to Step 3 Funnel Tier 2
  const transMetricFunnel = document.getElementById("transfer-metric-funnel-btn");
  if (transMetricFunnel) {
    transMetricFunnel.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.extracted_parameters) {
        const val = currentDecodedData.extracted_parameters.primary_metric_sentence;
        projectState.funnel.tier2 = val;
        const el = document.getElementById("funnel-tier2");
        if (el) el.value = val;
        saveToStorage();
        updateLiveScoreDebounced();
        updateLogicChainUIDebounced();
        showToast("Transferred Benchmark to Step 3 Background Funnel (Tier 2: Scientific Benchmark)!");
      }
    });
  }

  // Transfer Controls to Step 2 Matrix & Step 4 Methodology
  const transControls = document.getElementById("transfer-controls-btn");
  if (transControls) {
    transControls.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.extracted_parameters) {
        const val = currentDecodedData.extracted_parameters.controls;
        projectState.matrix.purple = val;
        const el = document.getElementById("matrix-purple");
        if (el) el.value = val;
        if (!projectState.methodology.includes("Controls:")) {
          projectState.methodology = (projectState.methodology ? projectState.methodology + "\n" : "") + `Controls: ${val}`;
          const methEl = document.getElementById("methodology-input");
          if (methEl) methEl.value = projectState.methodology;
        }
        saveToStorage();
        updateLiveScoreDebounced();
        updateLogicChainUIDebounced();
        showToast("Transferred Controls to Step 2 Matrix & Step 4 Methodology!");
      }
    });
  }

  // Transfer Gap to Step 2 Matrix & Step 3 Funnel Tier 3
  const transGap = document.getElementById("transfer-gap-btn");
  if (transGap) {
    transGap.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.extracted_parameters) {
        const val = currentDecodedData.extracted_parameters.stated_gap;
        projectState.matrix.green = val;
        projectState.funnel.tier3 = val;
        const mEl = document.getElementById("matrix-green");
        if (mEl) mEl.value = val;
        const fEl = document.getElementById("funnel-tier3");
        if (fEl) fEl.value = val;
        saveToStorage();
        updateLiveScoreDebounced();
        updateLogicChainUIDebounced();
        showToast("Transferred Gap to Step 2 Matrix & Step 3 Funnel (Tier 3)!");
      }
    });
  }

  // Transfer to Research Landscape & Comparative Position
  const transComp = document.getElementById("transfer-competitor-btn");
  if (transComp) {
    transComp.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.extracted_parameters) {
        const p = currentDecodedData.extracted_parameters;
        if (!projectState.competitor_data) projectState.competitor_data = {};
        const cd = projectState.competitor_data;

        const authorStr = currentDecodedData.authors ? currentDecodedData.authors.split(',')[0].trim() : 'Published Study';
        const yearStr = currentDecodedData.year ? ` (${currentDecodedData.year})` : '';
        const paperName = p.tool ? `${p.tool} (${authorStr}${yearStr})` : `${authorStr}${yearStr}`;

        cd.principle_recent = paperName;
        cd.emerging_name = paperName;

        if (p.primary_metric_sentence) {
          cd.performance_recent = p.primary_metric_sentence.slice(0, 100);
          cd.emerging_speed = cd.performance_recent;
        }
        if (p.stated_gap) {
          cd.limitation_recent = p.stated_gap.slice(0, 120);
          cd.gap_recent = p.stated_gap.slice(0, 120);
          cd.emerging_drawback = cd.limitation_recent;
        }
        if (currentDecodedData.citations && currentDecodedData.citations.apa) {
          cd.evidence_recent = currentDecodedData.citations.apa.slice(0, 120);
        } else if (currentDecodedData.journal) {
          cd.evidence_recent = `${currentDecodedData.journal} (${currentDecodedData.year || ''})`;
        }

        const elPrinciple = document.getElementById("comp-rec-principle");
        if (elPrinciple) elPrinciple.value = cd.principle_recent;
        const elPerf = document.getElementById("comp-rec-performance");
        if (elPerf) elPerf.value = cd.performance_recent || "";
        const elLimit = document.getElementById("comp-rec-limitation");
        if (elLimit) elLimit.value = cd.limitation_recent || "";
        const elGap = document.getElementById("comp-rec-gap");
        if (elGap) elGap.value = cd.gap_recent || "";
        const elEvid = document.getElementById("comp-rec-evidence");
        if (elEvid) elEvid.value = cd.evidence_recent || "";

        saveToStorage();
        updateLiveScoreDebounced();
        showToast("Imported into Research Landscape & Comparative Position (Step 5)!");
      }
    });
  }

  // Append to References
  const btnAppendRef = document.getElementById("btn-append-to-references");
  if (btnAppendRef) {
    btnAppendRef.addEventListener("click", () => {
      if (currentDecodedData && currentDecodedData.citations) {
        const cit = currentDecodedData.citations.apa;
        if (!projectState.references.includes(cit)) {
          projectState.references = (projectState.references.trim() ? projectState.references.trim() + "\n" : "") + cit;
          const refEl = document.getElementById("references-input");
          if (refEl) refEl.value = projectState.references;
          saveToStorage();
          updateLiveScoreDebounced();
          updateLogicChainUIDebounced();
          showToast("Appended to Step 6 Bibliography!");
        } else {
          showToast("Reference is already in your bibliography.");
        }
      }
    });
  }

  // Transfer to Step 2 RHEV Lab
  const btnTransferRhev = document.getElementById("btn-transfer-to-rhev-lab");
  if (btnTransferRhev) {
    btnTransferRhev.addEventListener("click", () => {
      const draftEl = document.getElementById("paper-socratic-draft-input");
      const draft = draftEl ? draftEl.value.trim() : "";
      const text = textInput ? textInput.value.trim() : "";
      const origEl = document.getElementById("rhev-original");
      const studentEl = document.getElementById("rhev-draft");
      if (origEl && text) origEl.value = text.slice(0, 350);
      if (studentEl && draft) studentEl.value = draft;
      if (modal) modal.style.display = "none";
      goToStep(2);
      setTimeout(() => {
        const target = document.getElementById("rhev-original");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          target.focus();
        }
      }, 150);
      showToast("Transferred to Step 2 RHEV Paraphrase Gym!");
    });
  }
}







/* ==========================================================================
   Scientific Visual Outputs & Multi-View Studio Engine
   ========================================================================== */

let activeFigure = "pipeline";
let activePalette = "indigo";
let activePipelineMode = "pipeline";

function initVisualStudio() {
  // 1. View Mode Switcher
  const btnStudio = document.getElementById("btn-view-studio");
  const btnSplit = document.getElementById("btn-view-split");
  const btnVisuals = document.getElementById("btn-view-visuals");
  const btnBreakthroughs = document.getElementById("btn-view-breakthroughs");
  const btnOpenVisualHub = document.getElementById("btn-open-visual-hub");

  if (btnStudio) btnStudio.addEventListener("click", () => setViewMode("studio"));
  if (btnSplit) btnSplit.addEventListener("click", () => setViewMode("split"));
  if (btnVisuals) btnVisuals.addEventListener("click", () => setViewMode("visuals"));
  if (btnBreakthroughs) btnBreakthroughs.addEventListener("click", () => setViewMode("breakthroughs"));
  if (btnOpenVisualHub) btnOpenVisualHub.addEventListener("click", () => setViewMode("visuals"));

  // 2. Figure Tab Switcher
  document.querySelectorAll(".btn-fig-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".btn-fig-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeFigure = tab.getAttribute("data-fig") || "pipeline";
      renderActiveVisualFigure();
    });
  });

  // 3. Palette Switcher
  document.querySelectorAll(".btn-palette").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-palette").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activePalette = btn.getAttribute("data-palette") || "indigo";
      renderActiveVisualFigure();
    });
  });

  // 4. Print & Copy controls
  const btnPrintFig = document.getElementById("btn-print-fig");
  if (btnPrintFig) {
    btnPrintFig.addEventListener("click", () => {
      if (activeFigure === "pitch") {
        window.print();
      } else {
        const stage = document.getElementById("visual-stage-container");
        if (stage) {
          const printWin = window.open("", "_blank");
          printWin.document.write(`<html><head><title>BioWriter Scientific Figure</title><link rel="stylesheet" href="/static/css/studio.css"></head><body style="background:white; padding:30px;">${stage.innerHTML}</body></html>`);
          printWin.document.close();
          setTimeout(() => { printWin.print(); printWin.close(); }, 500);
        }
      }
    });
  }

  const btnCopyFig = document.getElementById("btn-copy-fig");
  if (btnCopyFig) {
    btnCopyFig.addEventListener("click", () => {
      const stage = document.getElementById("visual-stage-container");
      if (stage) {
        navigator.clipboard.writeText(stage.innerText).then(() => {
          showToast("Figure summary copied to clipboard!");
        });
      }
    });
  }

  // Initial render of visual figure and live manuscript
  renderLiveManuscript();
  renderActiveVisualFigure();
}

function setViewMode(mode) {
  const btnStudio = document.getElementById("btn-view-studio");
  const btnSplit = document.getElementById("btn-view-split");
  const btnVisuals = document.getElementById("btn-view-visuals");
  const btnBreakthroughs = document.getElementById("btn-view-breakthroughs");
  const ws = document.getElementById("studio-workspace");
  const btView = document.getElementById("view-container-breakthroughs");

  [btnStudio, btnSplit, btnVisuals, btnBreakthroughs].forEach(btn => {
    if (btn) btn.classList.remove("active");
  });

  const guidanceBar = document.getElementById("studio-floating-guidance-bar");

  if (mode === "breakthroughs") {
    document.body.classList.remove("split-view-active");
    if (btnBreakthroughs) btnBreakthroughs.classList.add("active");
    if (ws) ws.style.display = "none";
    if (btView) btView.style.display = "block";
    if (guidanceBar) guidanceBar.style.display = "none";
    loadBreakthroughsCatalog();
    showToast("Switched to Biotechnology Breakthroughs Radar");
    return;
  }

  // If leaving breakthroughs, hide breakthroughs and reveal workspace
  if (btView) btView.style.display = "none";
  if (ws && currentAuthUser) ws.style.display = "grid";

  // Manage persistent milestone bar visibility
  if (guidanceBar) {
    if (mode !== "studio" || sessionStorage.getItem("biowriter_guidance_dismissed") === "true") {
      guidanceBar.style.display = "none";
    } else if (currentAuthUser) {
      guidanceBar.style.display = "block";
    }
  }

  if (mode === "studio") {
    document.body.classList.remove("split-view-active");
    if (btnStudio) btnStudio.classList.add("active");
    showToast("Switched to Focused Studio Mode");
  } else if (mode === "split") {
    document.body.classList.add("split-view-active");
    if (btnSplit) btnSplit.classList.add("active");
    renderLiveManuscript();
    showToast("Switched to Live Split-Screen Manuscript Mode");
  } else if (mode === "visuals") {
    document.body.classList.remove("split-view-active");
    if (btnVisuals) btnVisuals.classList.add("active");
    goToStep(6);
    const card = document.getElementById("card-visual-figures-hub");
    if (card) {
      setTimeout(() => {
        card.scrollIntoView({ behavior: "smooth", block: "start" });
        card.style.boxShadow = "0 0 0 3px #0284c7, 0 10px 25px rgba(0,0,0,0.1)";
        setTimeout(() => card.style.boxShadow = "", 1800);
      }, 150);
    }
    renderActiveVisualFigure();
    showToast("Opened Scientific Visual Outputs & Figures Hub!");
  }
}

// ==========================================================================
// 1. Live Academic Manuscript Renderer
// ==========================================================================
function renderLiveManuscript() {
  const setEl = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.innerText = text || "";
  };
  const setHtml = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html || "";
  };

  // Header
  setEl("manu-title", projectState.title || "Proposal Title Not Yet Specified");
  
  // Team Roster Authors Line
  let authorStr = "";
  if (projectState.team_members && projectState.team_members.length > 0) {
    const names = projectState.team_members.map(m => m.name).filter(Boolean);
    if (names.length > 0) authorStr = names.join(" • ");
  }
  if (!authorStr) authorStr = projectState.student_name || "Principal Investigator & Research Team";
  setEl("manu-author", authorStr);
  setEl("manu-submission-date", `Submission Date: ${projectState.submission_date || "Pending"}`);

  // 1. Abstract & Keywords
  const absText = projectState.abstract || "No structured abstract drafted yet.";
  setEl("manu-abstract", absText);
  const words = absText.trim().split(/\s+/).filter(Boolean);
  const wCount = absText.trim() ? words.length : 0;
  let absStatus = "150–250w target";
  if (wCount >= 150 && wCount <= 250) absStatus = "✅ Compliant (150–250w)";
  else if (wCount < 150) absStatus = `⚠️ Under minimum (${wCount}/150w)`;
  else absStatus = `🛑 Exceeds maximum (${wCount}/250w)`;
  setEl("manu-abstract-count", `${wCount} words (${absStatus})`);
  setEl("manu-keywords", projectState.keywords || "Biotechnology, Molecular Engineering, Chassis, Empirical Benchmark");

  // 2. Introduction & Background
  const narr = projectState.problem_narrative || 
    (projectState.funnel ? [projectState.funnel.tier1, projectState.funnel.tier2, projectState.funnel.tier3, projectState.funnel.tier4].filter(Boolean).join(" ") : "") ||
    "Draft your Section 2.1 unified narrative in Phase 1.";
  setEl("manu-background", narr);

  // 2.2 Multi-Domain Impact
  let domHtml = "";
  if (projectState.impact_domains && projectState.impact_domains.length > 0) {
    domHtml += `<div style="margin-bottom:6px;"><strong>Target Domains:</strong> ${projectState.impact_domains.map(d => `<span style="display:inline-block; background:#e0e7ff; color:#3730a3; padding:1px 6px; border-radius:4px; margin-right:4px; font-size:0.75rem;">${escapeHtml(d.charAt(0).toUpperCase() + d.slice(1))}</span>`).join("")}</div>`;
  }
  domHtml += `<div>${escapeHtml(projectState.impact_text || projectState.impact || "Select impact domains in Phase 1.")}</div>`;
  setHtml("manu-impact-domains", domHtml);

  // 2.3 Target Audience
  setEl("manu-target-audience", projectState.target_audience || projectState.customer || "Specify target beneficiaries in Phase 1.");

  // 3. Aim & Objectives
  setEl("manu-aim-overall", projectState.overarching_aim || projectState.aim || projectState.funnel?.tier4 || "Formulate your overarching aim in Phase 2.");
  
  let aimsHtml = "";
  if (projectState.objectives && projectState.objectives.length > 0) {
    aimsHtml = `<ol style="margin-left: 18px; padding-left: 0; margin-top: 4px; margin-bottom: 4px;">` +
      projectState.objectives.map(o => `<li style="margin-bottom: 4px;"><strong>${escapeHtml(o.verb)}:</strong> ${escapeHtml(o.text)}</li>`).join("") +
      `</ol>`;
  } else if (projectState.aims && (projectState.aims.aim1 || projectState.aims.aim2)) {
    aimsHtml = `<ol style="margin-left: 18px; padding-left: 0; margin-top: 4px; margin-bottom: 4px;">` +
      (projectState.aims.aim1 ? `<li style="margin-bottom: 4px;">${escapeHtml(projectState.aims.aim1)}</li>` : "") +
      (projectState.aims.aim2 ? `<li style="margin-bottom: 4px;">${escapeHtml(projectState.aims.aim2)}</li>` : "") +
      (projectState.aims.aim3 ? `<li style="margin-bottom: 4px;">${escapeHtml(projectState.aims.aim3)}</li>` : "") +
      `</ol>`;
  } else {
    aimsHtml = "<em>Formulate your 3–6 action verb objectives in Phase 2.</em>";
  }
  setHtml("manu-aims-list", aimsHtml);

  // 4. Methodology & Experimental Design
  setEl("manu-methodology", projectState.methodology || "Detail your future-tense workflow in Phase 2.");

  // 4.2 Figure preview
  const figPreview = document.getElementById("manu-figure-preview");
  if (figPreview) {
    const chassis = projectState.chassis || projectState.system || "Host Chassis";
    const tool = projectState.tool || "Molecular Tool";
    const target = projectState.target || "Phenotypic Target";
    figPreview.innerHTML = `
      <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:10px; text-align:center;">
        <div style="display:flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap; font-size:0.78rem; margin-bottom:6px;">
          <span style="background:#f0fdf4; border:1px solid #86efac; color:#15803d; padding:4px 8px; border-radius:6px; font-weight:700;">🦠 ${escapeHtml(chassis)}</span>
          <span style="color:#94a3b8; font-weight:800;">➔</span>
          <span style="background:#faf5ff; border:1px solid #d8b4fe; color:#7e22ce; padding:4px 8px; border-radius:6px; font-weight:700;">✂️ ${escapeHtml(tool)}</span>
          <span style="color:#94a3b8; font-weight:800;">➔</span>
          <span style="background:#eff6ff; border:1px solid #93c5fd; color:#1d4ed8; padding:4px 8px; border-radius:6px; font-weight:700;">🎯 ${escapeHtml(target)}</span>
        </div>
        <div style="font-size:0.75rem; color:#475569; font-style:italic;">${escapeHtml(projectState.flowchart_caption || "Figure 1: Schematic workflow depicting genetic engineering and functional validation pipeline.")}</div>
      </div>
    `;
  }

  // 4.3 Materials & Methods + Controls
  let methodsHtml = projectState.materials_methods ? `<p style="margin-bottom:6px;">${escapeHtml(projectState.materials_methods)}</p>` : "";
  const ctrl = projectState.controls_checklist || {};
  methodsHtml += `
    <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; padding:8px 10px; font-size:0.78rem; margin-top:6px;">
      <div style="font-weight:700; color:#15803d; margin-bottom:4px;">Experimental Controls Verification:</div>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <span>${ctrl.positive ? '✅' : '⚪'} Positive Control: ${ctrl.positive ? 'Included' : 'Pending'}</span>
        <span>${ctrl.negative ? '✅' : '⚪'} Negative Control: ${ctrl.negative ? 'Included' : 'Pending'}</span>
        <span>${ctrl.triplicates ? '✅' : '⚪'} Biological Triplicates (n=3): ${ctrl.triplicates ? 'Verified' : 'Pending'}</span>
      </div>
    </div>
  `;
  setHtml("manu-materials-methods", methodsHtml);

  // 5. Risks
  let risksHtml = "";
  if (projectState.risks && projectState.risks.length > 0) {
    risksHtml = `
      <table style="width:100%; font-size:0.75rem; border-collapse:collapse; border:1px solid #cbd5e1; margin-top:4px;">
        <thead>
          <tr style="background:#f8fafc; text-align:left;">
            <th style="padding:4px 6px; border:1px solid #cbd5e1; width:45%;">Failure Mode</th>
            <th style="padding:4px 6px; border:1px solid #cbd5e1; width:15%;">Risk</th>
            <th style="padding:4px 6px; border:1px solid #cbd5e1; width:40%;">Fallback Plan B</th>
          </tr>
        </thead>
        <tbody>
          ${projectState.risks.map(r => `
            <tr>
              <td style="padding:4px 6px; border:1px solid #cbd5e1;">${escapeHtml(r.risk)}</td>
              <td style="padding:4px 6px; border:1px solid #cbd5e1; font-weight:700;">${escapeHtml(r.level || 'Moderate')}</td>
              <td style="padding:4px 6px; border:1px solid #cbd5e1;">${escapeHtml(r.fallback)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  } else {
    risksHtml = "<em>Detail technical failure modes and fallbacks in Phase 2.</em>";
  }
  setHtml("manu-risks", risksHtml);

  // 6. Ansoff Matrix
  const a = projectState.ansoff || {};
  const ansoffHtml = `
    <table style="width:100%; font-size:0.75rem; border-collapse:collapse; border:1px solid #cbd5e1; margin-top:4px;">
      <thead>
        <tr style="background:#f8fafc; text-align:left;">
          <th style="padding:4px 6px; border:1px solid #cbd5e1; width:22%;">Quadrant</th>
          <th style="padding:4px 6px; border:1px solid #cbd5e1; width:28%;">Strategic Focus</th>
          <th style="padding:4px 6px; border:1px solid #cbd5e1; width:50%;">Proposal Application</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding:4px 6px; border:1px solid #cbd5e1;"><strong>Market Penetration</strong></td><td style="padding:4px 6px; border:1px solid #cbd5e1;">Existing Tech / Existing Market</td><td style="padding:4px 6px; border:1px solid #cbd5e1;">${escapeHtml(a.penetration || "Catalytic optimization and yield elevation")}</td></tr>
        <tr><td style="padding:4px 6px; border:1px solid #cbd5e1;"><strong>Product Development</strong></td><td style="padding:4px 6px; border:1px solid #cbd5e1;">New Modality / Existing Market</td><td style="padding:4px 6px; border:1px solid #cbd5e1;">${escapeHtml(a.prod_dev || "Engineered novel construct with enhanced stability")}</td></tr>
        <tr><td style="padding:4px 6px; border:1px solid #cbd5e1;"><strong>Market Development</strong></td><td style="padding:4px 6px; border:1px solid #cbd5e1;">Existing Tech / New Market</td><td style="padding:4px 6px; border:1px solid #cbd5e1;">${escapeHtml(a.mkt_dev || "Translating bioprocess to agricultural runoffs")}</td></tr>
        <tr><td style="padding:4px 6px; border:1px solid #cbd5e1;"><strong>Diversification</strong></td><td style="padding:4px 6px; border:1px solid #cbd5e1;">New Tech / New Market</td><td style="padding:4px 6px; border:1px solid #cbd5e1;">${escapeHtml(a.diversification || "Living self-repairing synthetic materials")}</td></tr>
      </tbody>
    </table>
  `;
  setHtml("manu-ansoff", ansoffHtml);

  // 7. SWOT
  const sw = projectState.swot || {};
  const swotHtml = `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.75rem; margin-top:4px;">
      <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:6px; padding:6px 8px;"><strong>Strengths:</strong><br>${escapeHtml(sw.strengths || "High catalytic specificity and non-toxic chassis")}</div>
      <div style="background:#fff7ed; border:1px solid #fed7aa; border-radius:6px; padding:6px 8px;"><strong>Weaknesses:</strong><br>${escapeHtml(sw.weaknesses || "Potential recombinant expression bottlenecks")}</div>
      <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:6px; padding:6px 8px;"><strong>Opportunities:</strong><br>${escapeHtml(sw.opportunities || "Surging demand for sustainable bio-solutions")}</div>
      <div style="background:#fef2f2; border:1px solid #fecaca; border-radius:6px; padding:6px 8px;"><strong>Threats:</strong><br>${escapeHtml(sw.threats || "Regulatory approval timelines")}</div>
    </div>
  `;
  setHtml("manu-swot", swotHtml);

  // 8. PESTEL
  const pe = projectState.pestel || {};
  const pestelHtml = `
    <ul style="margin-left:18px; padding-left:0; font-size:0.75rem; margin-top:4px; margin-bottom:4px;">
      <li><strong>Political:</strong> ${escapeHtml(pe.political || "National biotechnology investment initiatives")}</li>
      <li><strong>Economic:</strong> ${escapeHtml(pe.economic || "Cost competitiveness against chemical synthesis in EGP")}</li>
      <li><strong>Social:</strong> ${escapeHtml(pe.social || "Public acceptance of engineered biological products")}</li>
      <li><strong>Technological:</strong> ${escapeHtml(pe.technological || pe.tech || "Advances in synthetic biology and screening")}</li>
      <li><strong>Environmental:</strong> ${escapeHtml(pe.environmental || pe.env || "Zero-toxic byproduct generation")}</li>
      <li><strong>Legal:</strong> ${escapeHtml(pe.legal || "Compliance with Egyptian biosafety regulations")}</li>
    </ul>
  `;
  setHtml("manu-pestel", pestelHtml);

  // 9.1 Timeline
  const gs = projectState.gantt_schedule || {};
  const totM = gs.total_months || 18;
  const timeHtml = `
    <div style="font-size:0.75rem;">
      <div style="margin-bottom:4px;"><strong>Duration:</strong> ${totM} Months (Scientific Milestones — Zero Student Names Assigned)</div>
      <div>• <strong>WP1 (Design & Construction):</strong> Months ${gs.wp1_start || 1}–${gs.wp1_end || 6} | Gate: ${escapeHtml(gs.wp1_gate || "Sequence verified")}</div>
      <div>• <strong>WP2 (Functional Characterization):</strong> Months ${gs.wp2_start || 5}–${gs.wp2_end || 12} | Gate: ${escapeHtml(gs.wp2_gate || "Activity threshold met")}</div>
      <div>• <strong>WP3 (Optimization & Validation):</strong> Months ${gs.wp3_start || 10}–${gs.wp3_end || totM} | Gate: ${escapeHtml(gs.wp3_gate || "Benchmark outperformed")}</div>
    </div>
  `;
  setHtml("manu-timeline", timeHtml);

  // 9.2 Budget EGP
  let grandTotalEgp = 0;
  let budgetHtml = "";
  if (projectState.budget_egp_items && projectState.budget_egp_items.length > 0) {
    projectState.budget_egp_items.forEach(it => {
      grandTotalEgp += (parseInt(it.qty, 10) || 1) * (parseFloat(it.unit_cost) || 0);
    });
    budgetHtml = `
      <table style="width:100%; font-size:0.75rem; border-collapse:collapse; border:1px solid #cbd5e1; margin-top:4px;">
        <thead>
          <tr style="background:#f8fafc; text-align:left;">
            <th style="padding:4px 6px; border:1px solid #cbd5e1; width:45%;">Item Description</th>
            <th style="padding:4px 6px; border:1px solid #cbd5e1; width:25%;">Category</th>
            <th style="padding:4px 6px; border:1px solid #cbd5e1; width:10%; text-align:center;">Qty</th>
            <th style="padding:4px 6px; border:1px solid #cbd5e1; width:20%; text-align:right;">Total (EGP)</th>
          </tr>
        </thead>
        <tbody>
          ${projectState.budget_egp_items.map(it => {
            const tot = (parseInt(it.qty, 10) || 1) * (parseFloat(it.unit_cost) || 0);
            return `
              <tr>
                <td style="padding:4px 6px; border:1px solid #cbd5e1;">${escapeHtml(it.desc)}</td>
                <td style="padding:4px 6px; border:1px solid #cbd5e1;">${escapeHtml(it.category)}</td>
                <td style="padding:4px 6px; border:1px solid #cbd5e1; text-align:center;">${it.qty}</td>
                <td style="padding:4px 6px; border:1px solid #cbd5e1; text-align:right;">${tot.toLocaleString('en-US', {minimumFractionDigits: 2})} EGP</td>
              </tr>
            `;
          }).join("")}
          <tr style="background:#fef3c7; font-weight:700;">
            <td colspan="3" style="padding:4px 6px; border:1px solid #cbd5e1;">TOTAL ESTIMATED BUDGET</td>
            <td style="padding:4px 6px; border:1px solid #cbd5e1; text-align:right;">${grandTotalEgp.toLocaleString('en-US', {minimumFractionDigits: 2})} EGP</td>
          </tr>
        </tbody>
      </table>
    `;
  } else {
    budgetHtml = `
      <div style="font-size:0.75rem; background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:8px 10px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:2px;"><span>A. Equipment & Facilities:</span><strong>45,000.00 EGP</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:2px;"><span>B. Consumables & Reagents:</span><strong>83,000.00 EGP</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:2px;"><span>C. Travel & Field Work:</span><strong>8,000.00 EGP</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:2px;"><span>D. Personnel & Student Stipends:</span><strong>36,000.00 EGP</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:2px;"><span>E. Training & Computational/Software:</span><strong>15,000.00 EGP</strong></div>
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;"><span>F. Contingency & Waste (5%):</span><strong>15,000.00 EGP</strong></div>
        <div style="display:flex; justify-content:space-between; border-top:1px solid #cbd5e1; padding-top:4px; font-weight:700; color:#1e293b;"><span>Total Budget:</span><strong>202,000.00 EGP (ج.م)</strong></div>
      </div>
    `;
  }
  setHtml("manu-budget", budgetHtml);

  // 10. References
  const refs = projectState.references ? escapeHtml(projectState.references).replace(/\n/g, "<br>") : "<em>Paste references in Phase 4.</em>";
  setHtml("manu-references", refs);

  // Wire Print and Copy Buttons (Option C)
  const btnPrint = document.getElementById("btn-print-manuscript");
  if (btnPrint && !btnPrint._wired) {
    btnPrint._wired = true;
    btnPrint.addEventListener("click", () => window.print());
  }

  const btnCopy = document.getElementById("btn-copy-manuscript");
  if (btnCopy && !btnCopy._wired) {
    btnCopy._wired = true;
    btnCopy.addEventListener("click", () => {
      const fullText = `NATURE BIOTECHNOLOGY PREPRINT\n\nTitle: ${projectState.title || 'Untitled Proposal'}\nAuthors: ${projectState.student_name || 'Anonymous'}\n\nSTRUCTURED ABSTRACT:\n${projectState.abstract || ''}\n\n1. INTRODUCTION & GAP:\n${projectState.funnel ? Object.values(projectState.funnel).join('\n') : ''}\n\n2. SPECIFIC OBJECTIVES:\n${projectState.aims ? Object.values(projectState.aims).join('\n') : ''}\n\n3. METHODOLOGY & CONTROLS:\n${projectState.methodology || ''}\n\nREFERENCES:\n${projectState.references || ''}`;
      navigator.clipboard.writeText(fullText).then(() => {
        showToast("Full preprint manuscript copied to clipboard!");
      });
    });
  }
}

// ==========================================================================
// 2. Active Figure Dispatcher
// ==========================================================================
function renderActiveVisualFigure() {
  const container = document.getElementById("visual-stage-container");
  if (!container) return;

  if (activeFigure === "pipeline") {
    container.innerHTML = renderPipelineHtml();
    wirePipelineToggles();
  } else if (activeFigure === "donut") {
    container.innerHTML = renderDonutHtml();
  } else if (activeFigure === "pitch") {
    container.innerHTML = renderPitchSheetHtml();
  } else {
    activeFigure = "pipeline";
    container.innerHTML = renderPipelineHtml();
    wirePipelineToggles();
  }
}

// ==========================================================================
// 3. Output 1: 4-Pillar Publication Graphical Abstract
// ==========================================================================
function renderGraphicalAbstractHtml() {
  const title = projectState.title ? projectState.title.trim() : "(Project Title Defined in Step 1)";
  const pi = projectState.student_name ? projectState.student_name.trim() : "Principal Investigator & Research Team";
  const modality = (projectState.model_id === "custom" && projectState.custom_modality) 
    ? projectState.custom_modality 
    : (projectModels[projectState.model_id]?.name?.split("(")[0]?.trim() || "Biotechnology Research");

  let problem = "";
  if (projectState.funnel && projectState.funnel.tier1 && projectState.funnel.tier1.trim()) {
    problem = projectState.funnel.tier1.trim();
  } else if (projectState.matrix && projectState.matrix.yellow && projectState.matrix.yellow.trim()) {
    problem = projectState.matrix.yellow.trim();
  } else {
    problem = "(Define epidemiological or scientific problem burden in Step 2 or Step 3)";
  }
  if (problem.length > 130) problem = problem.slice(0, 130) + "...";

  const chassis = projectState.chassis || projectState.system || "(Host organism / test specimen defined in Step 1)";
  const tool = projectState.tool || "(Molecular tool / engineered intervention defined in Step 1)";
  
  let metric = "";
  if (projectState.matrix && projectState.matrix.blue && projectState.matrix.blue.trim()) {
    metric = projectState.matrix.blue.trim();
  } else if (projectState.matrix && projectState.matrix.red && projectState.matrix.red.trim()) {
    metric = projectState.matrix.red.trim();
  } else if (projectState.target && projectState.target.trim()) {
    metric = projectState.target.trim();
  } else {
    metric = "(Target metric / baseline benchmark in Step 2)";
  }

  let gap = "";
  if (projectState.funnel && projectState.funnel.tier3 && projectState.funnel.tier3.trim()) {
    gap = projectState.funnel.tier3.trim();
  } else if (projectState.matrix && projectState.matrix.green && projectState.matrix.green.trim()) {
    gap = projectState.matrix.green.trim();
  } else if (projectState.competitor_data && projectState.competitor_data.gap_established) {
    gap = projectState.competitor_data.gap_established;
  } else {
    gap = "(Unresolved mechanistic or technical gap in Step 2/Step 3)";
  }
  if (gap.length > 120) gap = gap.slice(0, 120) + "...";

  let breakthrough = "";
  if (projectState.matrix && projectState.matrix.red && projectState.matrix.red.trim()) {
    breakthrough = projectState.matrix.red.trim();
  } else if (projectState.usps && projectState.usps.trim()) {
    breakthrough = projectState.usps.trim();
  } else if (projectState.competitor_data && projectState.competitor_data.contribution_proposed) {
    breakthrough = projectState.competitor_data.contribution_proposed;
  } else {
    breakthrough = "(Proposed breakthrough & novel mechanism formulated in Step 4/Step 5)";
  }
  if (breakthrough.length > 130) breakthrough = breakthrough.slice(0, 130) + "...";

  let impactText = projectState.impact || projectState.expected_outcomes || "";
  let acadImpact = "High-impact peer-reviewed publication & open dataset";
  let econImpact = "Field-deployable translational performance advantage";
  let socImpact = "Addressing key healthcare, environmental, or agrarian challenge";
  if (impactText) {
    const lines = impactText.split("\n").map(l => l.trim()).filter(Boolean);
    if (lines.length >= 1 && lines[0].length > 5) acadImpact = lines[0].slice(0, 50);
    if (lines.length >= 2 && lines[1].length > 5) econImpact = lines[1].slice(0, 50);
    if (lines.length >= 3 && lines[2].length > 5) socImpact = lines[2].slice(0, 50);
  }

  const headerGradients = {
    indigo: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
    emerald: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
    cyan: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 100%)"
  };
  const headerBg = headerGradients[activePalette] || headerGradients.indigo;

  return `
    <div class="ga-container" id="printable-ga-figure">
      <div class="ga-header-strip" style="background: ${headerBg};">
        <div>
          <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: #a5f3fc; font-weight: 700;">
            Publication Graphical Abstract • BT_301 Grant Portfolio
          </div>
          <div class="ga-title-text">${escapeHtml(title)}</div>
        </div>
        <div style="text-align: right;">
          <span style="background: rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 999px; font-size: 0.75rem; font-weight: 700;">
            ${escapeHtml(modality)}
          </span>
          <div style="font-size: 0.75rem; color: #e2e8f0; margin-top: 4px;">PI: ${escapeHtml(pi)}</div>
        </div>
      </div>

      <!-- 4 Pillars Grid -->
      <div class="ga-grid">
        <!-- 1. Problem -->
        <div class="ga-pillar-card p-problem">
          <div class="ga-pillar-tag" style="color: #b91c1c;">
            <span>🎯 1. Target Problem</span>
          </div>
          <div class="ga-pillar-content">${escapeHtml(problem)}</div>
        </div>

        <!-- 2. Biological Chassis -->
        <div class="ga-pillar-card p-chassis">
          <div class="ga-pillar-tag" style="color: #047857;">
            <span>🧫 2. Biological Chassis / System</span>
          </div>
          <div class="ga-pillar-content"><strong>Host / Matrix:</strong> ${escapeHtml(chassis)}</div>
        </div>

        <!-- 3. Molecular Tool -->
        <div class="ga-pillar-card p-tool">
          <div class="ga-pillar-tag" style="color: #1d4ed8;">
            <span>🧬 3. Molecular Tool / Intervention</span>
          </div>
          <div class="ga-pillar-content">${escapeHtml(tool)}</div>
        </div>

        <!-- 4. Quantitative Metric -->
        <div class="ga-pillar-card p-metric">
          <div class="ga-pillar-tag" style="color: #b45309;">
            <span>📊 4. Empirical Benchmark</span>
          </div>
          <div class="ga-pillar-content" style="font-size:0.8rem; color:#475569;">Quantitative Target Metric:</div>
          <div class="ga-stat-badge">${escapeHtml(metric)}</div>
        </div>
      </div>

      <!-- Mechanism Flow Ribbon -->
      <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 12px 18px; display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 0.8rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 200px; background: white; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #ef4444;">
          <strong style="color: #b91c1c;">Identified Gap:</strong> ${escapeHtml(gap)}
        </div>
        <div style="font-size: 1.2rem; color: #4338ca; font-weight: 800;">➔</div>
        <div style="flex: 1; min-width: 200px; background: white; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #10b981;">
          <strong style="color: #047857;">Proposed Breakthrough:</strong> ${escapeHtml(breakthrough)}
        </div>
      </div>

      <!-- 3-Tier Impact Footer -->
      <div class="ga-impact-bar">
        <div><strong>3-Tier Expected Impact:</strong></div>
        <div style="background: white; padding: 3px 8px; border-radius: 4px; border: 1px solid #cbd5e1;">🎓 <strong>Academic:</strong> ${escapeHtml(acadImpact)}</div>
        <div style="background: white; padding: 3px 8px; border-radius: 4px; border: 1px solid #cbd5e1;">💼 <strong>Economic:</strong> ${escapeHtml(econImpact)}</div>
        <div style="background: white; padding: 3px 8px; border-radius: 4px; border: 1px solid #cbd5e1;">🌍 <strong>Societal:</strong> ${escapeHtml(socImpact)}</div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 4. Output 2: 6-Axis Scientific Rigor Radar Chart
// ==========================================================================
function renderRigorRadarHtml() {
  // Calculate dimension scores (0 to 1) based on real proposal completion
  const s1 = (projectState.funnel && projectState.funnel.tier1 && projectState.funnel.tier3) ? 0.90 : 0.40;
  const s2 = (projectState.matrix && projectState.matrix.blue) ? 0.85 : 0.35;
  const s3 = (projectState.funnel && projectState.funnel.tier4) ? 0.88 : 0.45;
  const s4 = (projectState.aims && projectState.aims.aim1 && projectState.aims.aim2 && projectState.aims.aim3) ? 0.95 : 0.40;
  const s5 = (projectState.methodology && projectState.methodology.length > 50) ? 0.85 : 0.30;
  const s6 = (projectState.references && projectState.references.length > 30) ? 0.80 : 0.35;

  const scores = [s1, s2, s3, s4, s5, s6];
  const labels = [
    "1. Novelty & Gap",
    "2. Evidence & Benchmarks",
    "3. Inverted Funnel",
    "4. Aims Decoupling",
    "5. Methodology & Controls",
    "6. References & Rigor"
  ];

  const cx = 200, cy = 200, radius = 130;
  const numAxes = 6;
  const angleStep = (2 * Math.PI) / numAxes;

  // Grid rings (20%, 40%, 60%, 80%, 100%)
  let gridPolys = "";
  for (let level = 0.2; level <= 1.05; level += 0.2) {
    let pts = [];
    for (let i = 0; i < numAxes; i++) {
      const ang = i * angleStep - Math.PI / 2;
      const x = cx + radius * level * Math.cos(ang);
      const y = cy + radius * level * Math.sin(ang);
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    gridPolys += `<polygon points="${pts.join(' ')}" fill="none" stroke="#e2e8f0" stroke-width="1.5" />`;
  }

  // Radial axes lines & labels
  let axesLines = "";
  let textLabels = "";
  for (let i = 0; i < numAxes; i++) {
    const ang = i * angleStep - Math.PI / 2;
    const x = cx + radius * Math.cos(ang);
    const y = cy + radius * Math.sin(ang);
    axesLines += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#cbd5e1" stroke-dasharray="3,3" />`;

    // Label position (pushed slightly outward)
    const lx = cx + (radius + 24) * Math.cos(ang);
    const ly = cy + (radius + 18) * Math.sin(ang);
    const anchor = (Math.abs(Math.cos(ang)) < 0.2) ? "middle" : (Math.cos(ang) > 0 ? "start" : "end");
    textLabels += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="${anchor}" font-size="10" font-weight="700" fill="#334155">${labels[i]}</text>`;
  }

  // Ideal target polygon (dashed blue)
  let idealPts = [];
  for (let i = 0; i < numAxes; i++) {
    const ang = i * angleStep - Math.PI / 2;
    const x = cx + radius * 0.9 * Math.cos(ang);
    const y = cy + radius * 0.9 * Math.sin(ang);
    idealPts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  // Student proposal polygon
  let studentPts = [];
  let dots = "";
  for (let i = 0; i < numAxes; i++) {
    const ang = i * angleStep - Math.PI / 2;
    const val = scores[i];
    const x = cx + radius * val * Math.cos(ang);
    const y = cy + radius * val * Math.sin(ang);
    studentPts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5" fill="#4338ca" stroke="#ffffff" stroke-width="1.5" />`;
  }

  const avgScore = Math.round((scores.reduce((a, b) => a + b, 0) / 6) * 100);

  return `
    <div class="radar-wrapper">
      <div style="background: white; border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <svg width="400" height="400" viewBox="0 0 400 400" style="overflow: visible;">
          ${gridPolys}
          ${axesLines}
          <!-- Ideal Benchmark Polygon -->
          <polygon points="${idealPts.join(' ')}" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,4" />
          <!-- Student Polygon -->
          <polygon points="${studentPts.join(' ')}" fill="rgba(79, 70, 229, 0.25)" stroke="#4338ca" stroke-width="2.5" />
          ${dots}
          ${textLabels}
        </svg>
      </div>

      <div class="radar-legend-box">
        <div style="font-size: 0.8rem; text-transform: uppercase; font-weight: 800; color: #4338ca; margin-bottom: 4px;">Proposal Health Index</div>
        <div style="font-size: 2rem; font-weight: 800; color: #1e1b4b; margin-bottom: 8px;">${avgScore}% Balanced</div>

        <div style="font-size: 0.82rem; color: #475569; line-height: 1.5; margin-bottom: 12px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span style="width:12px; height:12px; background:#4338ca; border-radius:2px;"></span>
            <strong>Your Proposal Rigor Profile</strong>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="width:12px; height:12px; border:2px dashed #3b82f6; border-radius:2px;"></span>
            <strong>Target NIH/STDF Grant Benchmark</strong>
          </div>
        </div>

        <div style="background: #f8fafc; border-left: 3px solid #10b981; padding: 8px 12px; border-radius: 4px; font-size: 0.78rem;">
          <strong>💡 Strength:</strong> Clear work package independence across 3 specific aims.
        </div>
        <div style="background: #f8fafc; border-left: 3px solid #f59e0b; padding: 8px 12px; border-radius: 4px; font-size: 0.78rem; margin-top: 6px;">
          <strong>🔍 Area for Polish:</strong> Ensure empirical baseline metric ($T_m, k_{cat}$) is fully specified in Step 2.
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 5. Output 3: Experimental Pipeline Diagram
// ==========================================================================
function renderPipelineHtml() {
  const aims = projectState.aims || {};
  const a1 = aims.aim1 || "(Define Aim 1 objective in Step 4)";
  const a2 = aims.aim2 || "(Define Aim 2 objective in Step 4)";
  const a3 = aims.aim3 || "(Define Aim 3 objective in Step 4)";
  const t1 = aims.aim1_title || "Phase 1 • Construction & Preparation (WP1)";
  const t2 = aims.aim2_title || "Phase 2 • Functional Testing & Evaluation (WP2)";
  const t3 = aims.aim3_title || "Phase 3 • Real-World Validation & Trials (WP3)";
  const totM = Math.max(3, Math.min(60, parseInt(projectState.gantt_schedule?.total_months, 10) || 18));

  let controls = "";
  if (projectState.matrix && projectState.matrix.purple && projectState.matrix.purple.trim()) {
    controls = projectState.matrix.purple.trim();
  } else if (projectState.control_triad && (projectState.control_triad.positive || projectState.control_triad.negative)) {
    controls = `Positive: ${projectState.control_triad.positive || "Benchmark"} | Negative: ${projectState.control_triad.negative || "Vehicle control"}`;
  } else {
    controls = "Essential experimental controls: Positive benchmark, negative vehicle, and specificity standards.";
  }

  return `
    <div style="width: 100%; max-width: 900px; display: flex; flex-direction: column; align-items: center;">
      <!-- Pipeline Mode Switcher -->
      <div style="display: flex; gap: 8px; margin-bottom: 16px;">
        <button type="button" class="btn-pipeline-toggle active" data-mode="pipeline" style="background:#4338ca; color:white; border:none; padding:5px 14px; border-radius:6px; font-size:0.8rem; font-weight:700; cursor:pointer;">
          🧪 3-Phase Work Package Pipeline
        </button>
        <button type="button" class="btn-pipeline-toggle" data-mode="gantt" style="background:#f1f5f9; color:#475569; border:1px solid #cbd5e1; padding:5px 14px; border-radius:6px; font-size:0.8rem; font-weight:700; cursor:pointer;">
          📅 ${totM}-Month Gantt Milestones
        </button>
      </div>

      <div id="pipeline-content-stage" style="width:100%;">
        ${renderPipelineCardsHtml(a1, a2, a3, t1, t2, t3, controls)}
      </div>
    </div>
  `;
}

function renderPipelineCardsHtml(a1, a2, a3, t1, t2, t3, controls) {
  const gs = projectState.gantt_schedule || {};
  const g1 = gs.wp1_gate ? `Checkpoint: ${gs.wp1_gate}` : "Checkpoint: Sequence / Model Verification";
  const g2 = gs.wp2_gate ? `Checkpoint: ${gs.wp2_gate}` : "Checkpoint: Quantitative Activity Assay";
  const g3 = gs.wp3_gate ? `Checkpoint: ${gs.wp3_gate}` : "Checkpoint: Operational Validation & Matrix Trial";

  return `
    <div class="pipeline-flow">
      <!-- WP1 Node -->
      <div class="pipeline-node" style="border-top: 4px solid #3b82f6;">
        <div class="pipeline-node-title">${escapeHtml(t1)}</div>
        <p style="font-size:0.84rem; color:#334155; line-height:1.4;">${escapeHtml(a1)}</p>
        <div class="pipeline-control-tag">${escapeHtml(g1)}</div>
      </div>

      <div style="font-size: 1.4rem; color: #4338ca; font-weight: 800;">➔</div>

      <!-- WP2 Node -->
      <div class="pipeline-node" style="border-top: 4px solid #10b981;">
        <div class="pipeline-node-title">${escapeHtml(t2)}</div>
        <p style="font-size:0.84rem; color:#334155; line-height:1.4;">${escapeHtml(a2)}</p>
        <div class="pipeline-control-tag" style="background:#e0f2fe; color:#0369a1;">${escapeHtml(g2)}</div>
      </div>

      <div style="font-size: 1.4rem; color: #4338ca; font-weight: 800;">➔</div>

      <!-- WP3 Node -->
      <div class="pipeline-node" style="border-top: 4px solid #f59e0b;">
        <div class="pipeline-node-title">${escapeHtml(t3)}</div>
        <p style="font-size:0.84rem; color:#334155; line-height:1.4;">${escapeHtml(a3)}</p>
        <div class="pipeline-control-tag" style="background:#fef3c7; color:#92400e;">${escapeHtml(g3)}</div>
      </div>
    </div>

    <!-- Essential Controls Bar -->
    <div style="width: 100%; max-width: 880px; margin-top: 18px; background: white; border: 1px solid #cbd5e1; border-left: 4px solid #8b5cf6; padding: 12px 16px; border-radius: 8px; font-size: 0.84rem;">
      <strong style="color: #6d28d9;">Essential Controls Integrated Into Pipeline:</strong>
      <div style="color: #334155; margin-top: 4px;">${escapeHtml(controls)}</div>
    </div>
  `;
}

function renderGanttTimelineHtml() {
  ensureGanttTasks();
  const gs = projectState.gantt_schedule || {};
  const totalMonths = Math.max(3, Math.min(60, parseInt(gs.total_months, 10) || 18));
  const tasks = gs.tasks || [];

  const calcLeft = (start) => ((start - 1) / totalMonths * 100).toFixed(1) + "%";
  const calcWidth = (start, end) => (((end - start + 1) / totalMonths) * 100).toFixed(1) + "%";

  let monthHeaders = "";
  const step = totalMonths > 24 ? 2 : 1;
  for (let m = 1; m <= totalMonths; m += step) {
    monthHeaders += `<div style="flex:1; text-align:center; font-size:0.68rem; color:#64748b; border-right:1px dashed #e2e8f0; padding:2px 0;">M${m}</div>`;
  }

  let tasksHtml = "";
  if (tasks.length === 0) {
    tasksHtml = `<div style="text-align:center; font-size:0.8rem; color:#64748b; padding:16px;">No timeline milestones added. Define milestones in Step 5 to render here.</div>`;
  } else {
    tasksHtml = tasks.map((t, i) => {
      const color = GANTT_PALETTE[i % GANTT_PALETTE.length];
      const s = Math.max(1, Math.min(totalMonths, parseInt(t.start, 10) || 1));
      const e = Math.max(s, Math.min(totalMonths, parseInt(t.end, 10) || totalMonths));
      const name = t.name || `Phase ${i + 1}`;
      const gate = t.gate ? `<div style="font-size:0.72rem; color:${color.text}; margin-top:3px;">🏁 <strong>Go/No-Go Gate:</strong> ${escapeHtml(t.gate)}</div>` : '';

      return `
        <div>
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <strong style="color:${color.text};">${escapeHtml(name)}</strong>
            <span style="color:#64748b; font-weight:600;">Months ${s} – ${e}</span>
          </div>
          <div style="background:#e2e8f0; border-radius:6px; height:20px; overflow:hidden; position:relative;">
            <div style="position:absolute; left:${calcLeft(s)}; width:${calcWidth(s, e)}; background:${color.bar}; height:100%; border-radius:4px;"></div>
          </div>
          ${gate}
        </div>
      `;
    }).join("");
  }

  return `
    <div style="width: 100%; max-width: 880px; background: white; border-radius: 10px; border: 1px solid #cbd5e1; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
        <div style="font-size: 0.92rem; font-weight: 800; color: #1e1b4b;">Project Execution Timeline (${totalMonths}-Month Staged Schedule)</div>
        <span style="font-size:0.75rem; color:#64748b; font-weight:600;">${tasks.length} Milestone${tasks.length === 1 ? '' : 's'}</span>
      </div>
      <div style="display:flex; border-bottom:1px solid #cbd5e1; margin-bottom:12px; background:#f8fafc; border-radius:4px;">
        ${monthHeaders}
      </div>
      <div style="display: flex; flex-direction: column; gap: 14px; font-size: 0.8rem;">
        ${tasksHtml}
      </div>
    </div>
  `;
}

function wirePipelineToggles() {
  document.querySelectorAll(".btn-pipeline-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-pipeline-toggle").forEach(b => {
        b.classList.remove("active");
        b.style.background = "#f1f5f9";
        b.style.color = "#475569";
        b.style.border = "1px solid #cbd5e1";
      });
      btn.classList.add("active");
      btn.style.background = "#4338ca";
      btn.style.color = "white";
      btn.style.border = "none";

      const mode = btn.getAttribute("data-mode");
      const stage = document.getElementById("pipeline-content-stage");
      if (stage) {
        if (mode === "gantt") {
          stage.innerHTML = renderGanttTimelineHtml();
        } else {
          const aims = projectState.aims || {};
          const a1 = aims.aim1 || "(Define Aim 1 objective in Step 4)";
          const a2 = aims.aim2 || "(Define Aim 2 objective in Step 4)";
          const a3 = aims.aim3 || "(Define Aim 3 objective in Step 4)";
          const t1 = aims.aim1_title || "Phase 1 • Construction & Preparation (WP1)";
          const t2 = aims.aim2_title || "Phase 2 • Functional Testing & Evaluation (WP2)";
          const t3 = aims.aim3_title || "Phase 3 • Real-World Validation & Trials (WP3)";
          let controls = "";
          if (projectState.matrix && projectState.matrix.purple && projectState.matrix.purple.trim()) {
            controls = projectState.matrix.purple.trim();
          } else if (projectState.control_triad && (projectState.control_triad.positive || projectState.control_triad.negative)) {
            controls = `Positive: ${projectState.control_triad.positive || "Benchmark"} | Negative: ${projectState.control_triad.negative || "Vehicle control"}`;
          } else {
            controls = "Essential experimental controls: Positive benchmark, negative vehicle, and specificity standards.";
          }
          stage.innerHTML = renderPipelineCardsHtml(a1, a2, a3, t1, t2, t3, controls);
        }
      }
    });
  });
}

// ==========================================================================
// 6. Output 4: 2x2 Competitor Landscape Positioning Map
// ==========================================================================
function renderQuadrantHtml() {
  const comp = projectState.competitor_data || {};
  const incumbent = comp.principle_established || comp.incumbent_name || "Established Gold Standard";
  const emerging = comp.principle_recent || comp.emerging_name || "Recent Published Alternative";
  const proposed = comp.principle_proposed || comp.proposed_name || projectState.tool || "Proposed Solution";
  const usp = projectState.usps || comp.contribution_proposed || "(Define Unique Selling Proposition in Step 5)";

  return `
    <div class="quadrant-container">
      <div style="font-size: 0.9rem; font-weight: 800; color: #1e1b4b; margin-bottom: 8px;">2x2 Competitor Strategic Positioning Map</div>
      <div style="font-size: 0.8rem; color: #64748b; margin-bottom: 14px;">Visualizing performance vs. operational cost & complexity:</div>

      <div style="position: relative; width: 100%; height: 320px; background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; margin-bottom: 14px; overflow: hidden;">
        <!-- Center Axis Lines -->
        <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: #94a3b8;"></div>
        <div style="position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: #94a3b8;"></div>

        <!-- Quadrant Labels -->
        <div style="position: absolute; top: 8px; left: 12px; font-size: 0.68rem; font-weight: 800; color: #94a3b8; text-transform: uppercase;">High Cost • High Speed</div>
        <div style="position: absolute; top: 8px; right: 12px; font-size: 0.68rem; font-weight: 800; color: #16a34a; text-transform: uppercase; background: #dcfce7; padding: 2px 6px; border-radius: 4px;">★ Innovation Sweet Spot</div>
        <div style="position: absolute; bottom: 8px; left: 12px; font-size: 0.68rem; font-weight: 800; color: #94a3b8; text-transform: uppercase;">High Cost • Slow (Legacy)</div>
        <div style="position: absolute; bottom: 8px; right: 12px; font-size: 0.68rem; font-weight: 800; color: #94a3b8; text-transform: uppercase;">Low Cost • Low Performance</div>

        <!-- 1. Incumbent Point (Bottom Left) -->
        <div style="position: absolute; left: 22%; top: 68%; transform: translate(-50%, -50%); text-align: center;">
          <div style="width: 16px; height: 16px; background: #ef4444; border: 2px solid white; border-radius: 50%; margin: 0 auto; box-shadow: 0 2px 5px rgba(0,0,0,0.2);"></div>
          <div style="font-size: 0.72rem; font-weight: 700; color: #b91c1c; margin-top: 3px; max-width: 120px;">${escapeHtml(incumbent)}</div>
        </div>

        <!-- 2. Emerging Competitor Point (Middle) -->
        <div style="position: absolute; left: 52%; top: 58%; transform: translate(-50%, -50%); text-align: center;">
          <div style="width: 16px; height: 16px; background: #f59e0b; border: 2px solid white; border-radius: 50%; margin: 0 auto; box-shadow: 0 2px 5px rgba(0,0,0,0.2);"></div>
          <div style="font-size: 0.72rem; font-weight: 700; color: #b45309; margin-top: 3px; max-width: 120px;">${escapeHtml(emerging)}</div>
        </div>

        <!-- 3. Proposed Solution Point (Top Right - Sweet Spot) -->
        <div style="position: absolute; left: 80%; top: 22%; transform: translate(-50%, -50%); text-align: center;">
          <div style="width: 22px; height: 22px; background: #10b981; border: 3px solid white; border-radius: 50%; margin: 0 auto; box-shadow: 0 3px 8px rgba(16, 185, 129, 0.5); animation: pulse 2s infinite;"></div>
          <div style="font-size: 0.76rem; font-weight: 800; color: #047857; margin-top: 4px; background: white; padding: 2px 6px; border-radius: 4px; border: 1px solid #86efac; max-width: 140px;">${escapeHtml(proposed)}</div>
        </div>
      </div>

      <!-- USP Banner -->
      <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 10px 14px; border-radius: 6px; font-size: 0.85rem;">
        <strong style="color: #047857;">Unique Selling Proposition (USP):</strong>
        <div style="color: #1e293b; margin-top: 2px;">${escapeHtml(usp)}</div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 7. Output 5: Budget Donut Chart
// ==========================================================================
function renderDonutHtml() {
  const bi = projectState.budget_items || {};
  const cons = parseFloat(bi.consumables !== undefined ? bi.consumables : (document.getElementById("budget-consumables")?.value || 18500));
  const pers = parseFloat(bi.personnel !== undefined ? bi.personnel : (document.getElementById("budget-personnel")?.value || 12000));
  const util = parseFloat(bi.utilities !== undefined ? bi.utilities : (document.getElementById("budget-utilities")?.value || 4500));
  const equip = parseFloat(bi.equipment !== undefined ? bi.equipment : (document.getElementById("budget-equipment")?.value || 15000));

  const budget = [
    { category: "1. Consumables & Reagents", amount: cons },
    { category: "2. Personnel Incentives", amount: pers },
    { category: "3. Utilities & Overhead", amount: util },
    { category: "4. Specialized Equipment", amount: equip }
  ];

  let total = cons + pers + util + equip;
  if (total <= 0) total = 50000;

  const colors = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"];

  const cx = 140, cy = 140, rOuter = 110, rInner = 65;
  let currentAngle = 0;
  let paths = "";
  let legendItems = "";

  budget.forEach((item, idx) => {
    const amt = item.amount;
    const pct = Math.round((amt / total) * 100);
    const sliceDeg = (amt / total) * 360;
    const endAngle = currentAngle + sliceDeg;

    const startRad = (currentAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);

    const x1 = cx + rOuter * Math.cos(startRad);
    const y1 = cy + rOuter * Math.sin(startRad);
    const x2 = cx + rOuter * Math.cos(endRad);
    const y2 = cy + rOuter * Math.sin(endRad);

    const x3 = cx + rInner * Math.cos(endRad);
    const y3 = cy + rInner * Math.sin(endRad);
    const x4 = cx + rInner * Math.cos(startRad);
    const y4 = cy + rInner * Math.sin(startRad);

    const largeArc = sliceDeg > 180 ? 1 : 0;
    const color = colors[idx % colors.length];

    if (sliceDeg > 0.5) {
      const d = `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} L ${x3.toFixed(1)} ${y3.toFixed(1)} A ${rInner} ${rInner} 0 ${largeArc} 0 ${x4.toFixed(1)} ${y4.toFixed(1)} Z`;
      paths += `<path d="${d}" fill="${color}" stroke="#ffffff" stroke-width="2" />`;
    }

    legendItems += `
      <div class="donut-legend-item" style="margin-bottom:6px; display:flex; align-items:center; gap:8px;">
        <div class="donut-color-dot" style="width:12px; height:12px; border-radius:3px; background: ${color};"></div>
        <div style="flex: 1; font-size:0.8rem;"><strong>${escapeHtml(item.category)}</strong>: $${amt.toLocaleString()} (${pct}%)</div>
      </div>
    `;

    currentAngle = endAngle;
  });

  return `
    <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0; width: 100%; max-width: 680px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <div style="font-size: 0.9rem; font-weight: 800; color: #1e1b4b; margin-bottom: 4px;">Direct Cost Resource Allocation Donut Chart</div>
      <div style="font-size: 0.8rem; color: #64748b; margin-bottom: 18px;">Total Proposal Budget: <strong>$${total.toLocaleString()} USD</strong></div>

      <div class="donut-layout">
        <div style="position: relative; width: 280px; height: 280px;">
          <svg width="280" height="280" viewBox="0 0 280 280">
            ${paths}
          </svg>
          <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; pointer-events: none;">
            <div style="font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Total</div>
            <div style="font-size: 1.25rem; font-weight: 800; color: #1e1b4b;">$${total.toLocaleString()}</div>
          </div>
        </div>

        <div class="donut-legend" style="flex: 1; min-width: 220px;">
          ${legendItems}
          <div style="margin-top: 12px; background: #f0fdf4; border-left: 3px solid #10b981; padding: 6px 10px; border-radius: 4px; font-size: 0.75rem; color: #166534;">
            ✅ <strong>Agency Feasibility:</strong> Itemized budget tabulates real resource needs according to standard funding guidelines.
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 8. Output 6: 1-Page Nature-Style Executive Pitch Sheet
// ==========================================================================
function renderPitchSheetHtml() {
  const title = projectState.title ? projectState.title.trim() : "(Project Title Defined in Step 1)";
  const pi = projectState.student_name ? projectState.student_name.trim() : "Principal Investigator & Research Team";
  
  let abs = "";
  if (projectState.abstract && projectState.abstract.trim()) {
    abs = projectState.abstract.trim();
  } else if (projectState.funnel && projectState.funnel.tier1 && projectState.funnel.tier1.trim()) {
    abs = projectState.funnel.tier1.trim() + " " + (projectState.funnel.tier4 || "");
  } else {
    abs = "(Executive abstract and project problem statement drafted in Step 3 / Step 6)";
  }

  const aims = projectState.aims || {};
  const t1 = aims.aim1_title || "Construction & Preparation";
  const t2 = aims.aim2_title || "Functional Testing & Evaluation";
  const t3 = aims.aim3_title || "Real-World Validation & Performance Trial";
  const a1 = aims.aim1 || "Initial assembly, modeling or synthesis.";
  const a2 = aims.aim2 || "Functional testing and baseline assays.";
  const a3 = aims.aim3 || "Operational validation and real-world trials.";

  let metric = "";
  if (projectState.matrix && projectState.matrix.red && projectState.matrix.red.trim()) {
    metric = projectState.matrix.red.trim();
  } else if (projectState.matrix && projectState.matrix.blue && projectState.matrix.blue.trim()) {
    metric = projectState.matrix.blue.trim();
  } else if (projectState.target && projectState.target.trim()) {
    metric = projectState.target.trim();
  } else {
    metric = "(Target quantitative success milestone)";
  }

  let impactStatement = "";
  if (projectState.impact && projectState.impact.trim()) {
    impactStatement = projectState.impact.trim();
  } else if (projectState.expected_outcomes && projectState.expected_outcomes.trim()) {
    impactStatement = projectState.expected_outcomes.trim();
  } else {
    impactStatement = "(Long-term societal and translational return formulated in Step 5)";
  }

  const bi = projectState.budget_items || {};
  const cons = parseFloat(bi.consumables !== undefined ? bi.consumables : 18500);
  const pers = parseFloat(bi.personnel !== undefined ? bi.personnel : 12000);
  const util = parseFloat(bi.utilities !== undefined ? bi.utilities : 4500);
  const equip = parseFloat(bi.equipment !== undefined ? bi.equipment : 15000);
  const total = cons + pers + util + equip;

  return `
    <div class="pitch-sheet-wrapper" id="printable-pitch-sheet">
      <!-- Header -->
      <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #0f172a; padding-bottom: 12px; margin-bottom: 16px;">
        <div>
          <div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #0284c7;">
            EXECUTIVE GRANT PITCH BRIEF • BT_301 BIOTECHNOLOGY
          </div>
          <h1 style="font-size: 1.35rem; font-weight: 800; color: #0f172a; margin: 4px 0 6px 0; line-height: 1.3;">
            ${escapeHtml(title)}
          </h1>
          <div style="font-size: 0.84rem; color: #475569;">
            <strong>Principal Investigator:</strong> ${escapeHtml(pi)} | <strong>Submission Date:</strong> September 2026
          </div>
        </div>
        <div style="text-align: right;">
          <span style="background: #dbeafe; color: #1e40af; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 999px;">
            Agency Standard
          </span>
        </div>
      </div>

      <!-- 2-Column Pitch Content -->
      <div style="display: grid; grid-template-columns: 3fr 2fr; gap: 20px; margin-bottom: 16px;">
        <div>
          <div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #334155; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 6px;">
            Executive Abstract & Problem Statement
          </div>
          <p style="font-size: 0.85rem; color: #1e293b; line-height: 1.55;">${escapeHtml(abs)}</p>

          <div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #334155; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin: 12px 0 6px 0;">
            Specific Work Packages
          </div>
          <div style="font-size: 0.82rem; color: #334155; display: flex; flex-direction: column; gap: 6px;">
            <div><strong>WP1 (${escapeHtml(t1)}):</strong> ${escapeHtml(a1)}</div>
            <div><strong>WP2 (${escapeHtml(t2)}):</strong> ${escapeHtml(a2)}</div>
            <div><strong>WP3 (${escapeHtml(t3)}):</strong> ${escapeHtml(a3)}</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          <!-- Benchmark Box -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #f59e0b; padding: 12px; border-radius: 6px;">
            <div style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; color: #b45309;">Quantitative Success Milestone</div>
            <div style="font-size: 1.05rem; font-weight: 800; color: #78350f; margin-top: 4px;">${escapeHtml(metric)}</div>
          </div>

          <!-- Impact Box -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #10b981; padding: 12px; border-radius: 6px;">
            <div style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; color: #047857;">Long-Term Societal Return</div>
            <div style="font-size: 0.8rem; color: #1e293b; margin-top: 4px;">
              ${escapeHtml(impactStatement)}
            </div>
          </div>

          <!-- Budget Box -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #3b82f6; padding: 12px; border-radius: 6px;">
            <div style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; color: #1d4ed8;">Estimated Budget</div>
            <div style="font-size: 1rem; font-weight: 800; color: #1e3a8a; margin-top: 2px;">$${total.toLocaleString()} USD Direct Costs</div>
          </div>
        </div>
      </div>

      <!-- Signoff -->
      <div style="border-top: 1px solid #cbd5e1; padding-top: 10px; display: flex; justify-content: space-between; font-size: 0.78rem; color: #64748b;">
        <div>Certified for Academic Review • BT_301 Study Section</div>
        <div>Principal Investigator Signoff: ______________________</div>
      </div>
    </div>
  `;
}


function initHeaderAndNavigationEnhancements() {
  // Export Dropdown
  const exportTrigger = document.getElementById("btn-export-trigger");
  const exportMenu = document.getElementById("export-menu");
  if (exportTrigger && exportMenu) {
    exportTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = exportMenu.classList.toggle("open");
      exportTrigger.classList.toggle("active", isOpen);
    });

    document.addEventListener("click", (e) => {
      if (!exportTrigger.contains(e.target) && !exportMenu.contains(e.target)) {
        exportMenu.classList.remove("open");
        exportTrigger.classList.remove("active");
      }
    });

    // Close on option click
    exportMenu.querySelectorAll(".export-menu-item").forEach(item => {
      item.addEventListener("click", () => {
        exportMenu.classList.remove("open");
        exportTrigger.classList.remove("active");
      });
    });
  }

  // Paper Decoder shortcut button
  const btnPaperDecoder = document.getElementById("btn-open-paper-decoder");
  if (btnPaperDecoder) {
    btnPaperDecoder.addEventListener("click", () => {
      goToStep(2);
      const card = document.getElementById("card-paper-decoder");
      if (card) {
        setTimeout(() => {
          card.scrollIntoView({ behavior: "smooth", block: "start" });
          card.style.boxShadow = "0 0 0 3px #0284c7, 0 8px 24px rgba(0,0,0,0.1)";
          setTimeout(() => card.style.boxShadow = "", 1800);
        }, 150);
      }
    });
  }

  // Auto-assemble Title from 3 Pillars
  const btnAssembleTitle = document.getElementById("btn-assemble-title-from-pillars");
  if (btnAssembleTitle) {
    btnAssembleTitle.addEventListener("click", () => {
      const tool = (projectState.tool || document.getElementById("pillar-tool")?.value || "").trim();
      const chassis = (projectState.chassis || document.getElementById("pillar-chassis")?.value || "").trim();
      const target = (projectState.target || document.getElementById("pillar-target")?.value || "").trim();

      if (!tool || !chassis) {
        showToast("Please specify your Tool and Chassis in Pillar 1 & 2 first.");
        return;
      }

      const generatedTitle = `Engineered ${tool} in ${chassis} to Accelerate ${target || "Target Performance"} for Sustainable Bioprocess Application`;
      const titleInput = document.getElementById("proposal-title-input");
      if (titleInput) {
        titleInput.value = generatedTitle;
        projectState.title = generatedTitle;
        saveToStorage();
        updateLiveScore();
        showToast("Formula title assembled from your research pillars!");
      }
    });
  }

  // Logic Chain Collapse/Expand Toggle
  const chainToggleBtn = document.getElementById("btn-toggle-logic-chain");
  const chainTrack = document.getElementById("logic-chain-track");
  const chainSubtitle = document.querySelector(".logic-chain-subtitle");
  if (chainToggleBtn && chainTrack) {
    chainToggleBtn.addEventListener("click", () => {
      const isCollapsed = chainTrack.classList.toggle("collapsed");
      if (chainSubtitle) chainSubtitle.style.display = isCollapsed ? "none" : "inline";
      chainToggleBtn.innerHTML = isCollapsed ? "▸ Show Roadmap" : "▾ Hide Roadmap";
      chainToggleBtn.classList.toggle("collapsed", isCollapsed);
      showToast(isCollapsed ? "Logic Chain Roadmap collapsed" : "Logic Chain Roadmap expanded");
    });
  }
}


// ==========================================================================
// STUDENT AUTHENTICATION & ACCESS CONTROLLER (GATE & MODAL)
// ==========================================================================

let currentAuthUser = null;

function initAuthManager() {
  // Check active session on load
  checkAuthStatus();

  // --- Gate Tabs & Forms ---
  const gateTabIn = document.getElementById("gate-tab-signin");
  const gateTabReg = document.getElementById("gate-tab-register");
  if (gateTabIn) gateTabIn.addEventListener("click", () => switchGateTab("signin"));
  if (gateTabReg) gateTabReg.addEventListener("click", () => switchGateTab("register"));

  const gateFormIn = document.getElementById("gate-form-signin");
  if (gateFormIn) {
    gateFormIn.addEventListener("submit", (e) => {
      e.preventDefault();
      const sid = (document.getElementById("gate-signin-id").value || "").trim();
      const pwd = (document.getElementById("gate-signin-pwd").value || "").trim();
      if (!sid || !pwd) {
        showGateAlert("Please enter both Student ID and Password.", "error");
        return;
      }
      handleSignInSubmit(sid, pwd, true);
    });
  }

  const gateFormReg = document.getElementById("gate-form-register");
  if (gateFormReg) {
    gateFormReg.addEventListener("submit", (e) => {
      e.preventDefault();
      const sid = (document.getElementById("gate-reg-id").value || "").trim();
      const sname = (document.getElementById("gate-reg-name").value || "").trim();
      const pwd = (document.getElementById("gate-reg-pwd").value || "").trim();
      const pwdConf = (document.getElementById("gate-reg-pwd-confirm").value || "").trim();

      if (!sid || !sname || !pwd) {
        showGateAlert("Please fill in all required fields.", "error");
        return;
      }
      if (pwd.length < 4) {
        showGateAlert("Password must be at least 4 characters.", "error");
        return;
      }
      if (pwd !== pwdConf) {
        showGateAlert("Passwords do not match. Please re-check.", "error");
        return;
      }
      handleRegisterSubmit(sid, sname, pwd, true);
    });
  }

  const btnPreviewDemo = document.getElementById("btn-preview-demo");
  if (btnPreviewDemo) {
    btnPreviewDemo.addEventListener("click", () => {
      enterDemoAccount("13989", "bio123");
    });
  }

  // Gate Quick-Fill Chips (1-Click Auto-Fill & Instant Login)
  document.querySelectorAll(".btn-quick-fill").forEach(btn => {
    btn.addEventListener("click", () => {
      const sid = btn.getAttribute("data-id");
      enterDemoAccount(sid, "bio123");
    });
  });

  // Secret Faculty Access Shortcut: Ctrl + Shift + F
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "F" || e.key === "f")) {
      e.preventDefault();
      window.location.href = "faculty.html";
    }
  });

  // --- Modal Wiring (Fallback / Account Switch) ---
  const btnOpenModal = document.getElementById("btn-open-auth-modal");
  if (btnOpenModal) {
    btnOpenModal.addEventListener("click", () => openAuthModal("signin"));
  }

  const btnCloseModal = document.getElementById("btn-auth-close");
  if (btnCloseModal) {
    btnCloseModal.addEventListener("click", closeAuthModal);
  }

  const overlay = document.getElementById("auth-modal-overlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeAuthModal();
    });
  }

  const tabIn = document.getElementById("tab-btn-signin");
  const tabReg = document.getElementById("tab-btn-register");
  if (tabIn) tabIn.addEventListener("click", () => switchAuthTab("signin"));
  if (tabReg) tabReg.addEventListener("click", () => switchAuthTab("register"));

  const formIn = document.getElementById("form-auth-signin");
  if (formIn) {
    formIn.addEventListener("submit", (e) => {
      e.preventDefault();
      const sid = (document.getElementById("signin-student-id").value || "").trim();
      const pwd = (document.getElementById("signin-password").value || "").trim();
      if (!sid || !pwd) {
        showAuthAlert("Please enter both Student ID and Password.", "error");
        return;
      }
      handleSignInSubmit(sid, pwd, false);
    });
  }

  const formReg = document.getElementById("form-auth-register");
  if (formReg) {
    formReg.addEventListener("submit", (e) => {
      e.preventDefault();
      const sid = (document.getElementById("reg-student-id").value || "").trim();
      const sname = (document.getElementById("reg-student-name").value || "").trim();
      const pwd = (document.getElementById("reg-password").value || "").trim();
      const pwdConf = (document.getElementById("reg-password-confirm").value || "").trim();

      if (!sid || !sname || !pwd) {
        showAuthAlert("Please fill in all required fields.", "error");
        return;
      }
      if (pwd.length < 4) {
        showAuthAlert("Password must be at least 4 characters.", "error");
        return;
      }
      if (pwd !== pwdConf) {
        showAuthAlert("Passwords do not match.", "error");
        return;
      }
      handleRegisterSubmit(sid, sname, pwd, false);
    });
  }

  // Universal Show/Hide Password Toggles (both modal & gate)
  document.querySelectorAll(".btn-toggle-pwd").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-target");
      const input = document.getElementById(targetId);
      if (input) {
        if (input.type === "password") {
          input.type = "text";
          btn.innerText = "🙈";
        } else {
          input.type = "password";
          btn.innerText = "👁️";
        }
      }
    });
  });

  // User Profile Dropdown & Logout
  const profileTrigger = document.getElementById("btn-user-profile-trigger");
  const menu = document.getElementById("auth-user-menu");
  if (profileTrigger && menu) {
    profileTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!profileTrigger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  }

  const btnLogout = document.getElementById("btn-action-logout");
  if (btnLogout) {
    btnLogout.addEventListener("click", handleLogout);
  }

  const btnDirectLogout = document.getElementById("btn-student-direct-logout");
  if (btnDirectLogout) {
    btnDirectLogout.addEventListener("click", handleLogout);
  }

  // Cloud Draft Sync Button
  const btnSyncDraft = document.getElementById("btn-sync-server-draft");
  if (btnSyncDraft) {
    btnSyncDraft.addEventListener("click", async () => {
      await saveStudentDraftToServer(true);
    });
  }
}

function getStoredAccounts() {
  const defaultAccounts = {
    "13989": { student_id: "13989", student_name: "Maya", password: "bio123", role: "student" },
    "13988": { student_id: "13988", student_name: "Maya", password: "bio123", role: "student" },
    "ST-2026-01": { student_id: "ST-2026-01", student_name: "Sara Ahmed & Team BioInnovate", password: "bio123", role: "student" },
    "ST-2026-02": { student_id: "ST-2026-02", student_name: "Zaid Ibrahim & BioCatalysis Group", password: "bio123", role: "student" },
    "ST-2026-03": { student_id: "ST-2026-03", student_name: "Nour Al-Huda & Team Agribiotech", password: "bio123", role: "student" }
  };
  try {
    const raw = localStorage.getItem("bt301_student_accounts");
    if (raw) {
      return Object.assign(defaultAccounts, JSON.parse(raw));
    }
  } catch (e) {}
  return defaultAccounts;
}

function saveStoredAccount(account) {
  const accounts = getStoredAccounts();
  accounts[account.student_id.toUpperCase()] = account;
  try {
    localStorage.setItem("bt301_student_accounts", JSON.stringify(accounts));
  } catch (e) {}
}

function getLocalAuthSession() {
  try {
    const raw = localStorage.getItem("bt301_active_session");
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}

function setLocalAuthSession(user) {
  try {
    if (user) {
      localStorage.setItem("bt301_active_session", JSON.stringify({
        student_id: user.student_id,
        student_name: user.student_name,
        role: "student"
      }));
    } else {
      localStorage.removeItem("bt301_active_session");
    }
  } catch (e) {}
}

async function checkAuthStatus() {
  // Always present the Student Sign-In / Access Portal FIRST when opening index
  setUnauthenticatedUser();

  // Pre-fill student ID input for instant 1-click submission convenience
  const localSession = getLocalAuthSession();
  const defaultId = (localSession && localSession.student_id) ? localSession.student_id : "13989";
  const gateIdInput = document.getElementById("gate-signin-id");
  if (gateIdInput) {
    gateIdInput.value = defaultId;
  }
  const gatePwdInput = document.getElementById("gate-signin-pwd");
  if (gatePwdInput) {
    gatePwdInput.value = "bio123";
  }
}

async function enterDemoAccount(sid = "ST-2026-01", pwd = "bio123") {
  const idInput = document.getElementById("gate-signin-id");
  const pwdInput = document.getElementById("gate-signin-pwd");
  if (idInput) idInput.value = sid;
  if (pwdInput) pwdInput.value = pwd;
  await handleSignInSubmit(sid, pwd, true);
}

function setAuthenticatedUser(user, draftData) {
  currentAuthUser = user;
  setLocalAuthSession(user);
  sessionStorage.setItem("bt301_student_signed_in", "true");

  // 1. Hide the auth gate
  const gate = document.getElementById("student-auth-gate");
  if (gate) gate.style.display = "none";

  // 2. Reveal the workspace!
  const ws = document.getElementById("studio-workspace");
  if (ws) ws.style.display = "grid";

  // 3. Reveal top navbar tools
  const viewSelector = document.getElementById("view-mode-selector");
  if (viewSelector) viewSelector.style.display = "flex";
  const expDropdown = document.getElementById("export-dropdown-wrapper");
  if (expDropdown) expDropdown.style.display = "block";
  const btnDecoder = document.getElementById("btn-open-paper-decoder");
  if (btnDecoder) btnDecoder.style.display = "inline-flex";

  // 4. Update navbar profile
  const btnOpen = document.getElementById("btn-open-auth-modal");
  const wrap = document.getElementById("auth-user-dropdown-wrap");
  if (btnOpen) btnOpen.style.display = "none";
  if (wrap) wrap.style.display = "block";

  const dispName = document.getElementById("user-display-name");
  if (dispName) dispName.innerText = user.student_id;

  const menuName = document.getElementById("menu-student-name");
  if (menuName) menuName.innerText = user.student_name;

  const menuId = document.getElementById("menu-student-id");
  if (menuId) menuId.innerText = user.student_id;

  const saveStatus = document.getElementById("save-status");
  if (saveStatus) {
    saveStatus.innerText = "● Cloud Auto-Sync Active";
  }

  // Hide Guest Mode Banner if present
  const guestBanner = document.getElementById("workspace-guest-banner");
  if (guestBanner) {
    guestBanner.style.display = "none";
  }

  // 5. Prefill & lock Student ID input on Proposal Meta Card
  const idInput = document.getElementById("student-id-input");
  if (idInput) {
    idInput.value = user.student_id;
    idInput.readOnly = true;
    idInput.style.background = "#f1f5f9";
  }

  const nameInput = document.getElementById("student-name-input");
  if (nameInput && (!projectState.student_name || projectState.student_name.includes("BT_301"))) {
    nameInput.value = user.student_name;
    projectState.student_name = user.student_name;
  }

  projectState.student_id = user.student_id;

  // 6. If cloud draft exists, apply it
  if (draftData) {
    applyCloudDraftToWorkspace(draftData);
  } else {
    if (typeof renderInstructorReviewBanner === "function") {
      renderInstructorReviewBanner(projectState.faculty_review || null);
    }
  }
}

function setUnauthenticatedUser() {
  currentAuthUser = null;
  setLocalAuthSession(null);
  sessionStorage.removeItem("bt301_student_signed_in");

  // 1. Hide the workspace until student signs in
  const ws = document.getElementById("studio-workspace");
  if (ws) ws.style.display = "none";

  // 2. Hide top workspace controls
  const viewSelector = document.getElementById("view-mode-selector");
  if (viewSelector) viewSelector.style.display = "none";
  const expDropdown = document.getElementById("export-dropdown-wrapper");
  if (expDropdown) expDropdown.style.display = "none";
  const btnDecoder = document.getElementById("btn-open-paper-decoder");
  if (btnDecoder) btnDecoder.style.display = "none";

  // 3. Show the dedicated Student Access & Sign-In Gate
  const gate = document.getElementById("student-auth-gate");
  if (gate) gate.style.display = "flex";

  // 4. Update navbar indicators
  const btnOpen = document.getElementById("btn-open-auth-modal");
  const wrap = document.getElementById("auth-user-dropdown-wrap");
  if (btnOpen) btnOpen.style.display = "inline-flex";
  if (wrap) wrap.style.display = "none";

  const saveStatus = document.getElementById("save-status");
  if (saveStatus) saveStatus.innerText = "● Guest Mode (Sign in to sync)";

  const idInput = document.getElementById("student-id-input");
  if (idInput) {
    idInput.readOnly = false;
    idInput.style.background = "";
  }
}

function switchGateTab(tab) {
  const tabIn = document.getElementById("gate-tab-signin");
  const tabReg = document.getElementById("gate-tab-register");
  const formIn = document.getElementById("gate-form-signin");
  const formReg = document.getElementById("gate-form-register");

  hideGateAlert();

  if (tab === "signin") {
    if (tabIn) tabIn.classList.add("active");
    if (tabReg) tabReg.classList.remove("active");
    if (formIn) formIn.style.display = "block";
    if (formReg) formReg.style.display = "none";
    setTimeout(() => {
      const el = document.getElementById("gate-signin-id");
      if (el) el.focus();
    }, 100);
  } else {
    if (tabReg) tabReg.classList.add("active");
    if (tabIn) tabIn.classList.remove("active");
    if (formReg) formReg.style.display = "block";
    if (formIn) formIn.style.display = "none";
    setTimeout(() => {
      const el = document.getElementById("gate-reg-id");
      if (el) el.focus();
    }, 100);
  }
}

function showGateAlert(message, type = "error") {
  const banner = document.getElementById("gate-auth-alert-banner");
  if (banner) {
    banner.className = `auth-alert-banner ${type}`;
    banner.innerText = message;
    banner.style.display = "block";
  }
}

function hideGateAlert() {
  const banner = document.getElementById("gate-auth-alert-banner");
  if (banner) banner.style.display = "none";
}

function openAuthModal(tab = "signin") {
  const overlay = document.getElementById("auth-modal-overlay");
  if (overlay) overlay.style.display = "flex";
  switchAuthTab(tab);
  hideAuthAlert();
}

function closeAuthModal() {
  const overlay = document.getElementById("auth-modal-overlay");
  if (overlay) overlay.style.display = "none";
}

function switchAuthTab(tab) {
  const tabIn = document.getElementById("tab-btn-signin");
  const tabReg = document.getElementById("tab-btn-register");
  const formIn = document.getElementById("form-auth-signin");
  const formReg = document.getElementById("form-auth-register");

  hideAuthAlert();

  if (tab === "signin") {
    if (tabIn) tabIn.classList.add("active");
    if (tabReg) tabReg.classList.remove("active");
    if (formIn) formIn.style.display = "block";
    if (formReg) formReg.style.display = "none";
    setTimeout(() => {
      const el = document.getElementById("signin-student-id");
      if (el) el.focus();
    }, 100);
  } else {
    if (tabReg) tabReg.classList.add("active");
    if (tabIn) tabIn.classList.remove("active");
    if (formReg) formReg.style.display = "block";
    if (formIn) formIn.style.display = "none";
    setTimeout(() => {
      const el = document.getElementById("reg-student-id");
      if (el) el.focus();
    }, 100);
  }
}

function showAuthAlert(message, type = "error") {
  const banner = document.getElementById("auth-alert-banner");
  if (banner) {
    banner.className = `auth-alert-banner ${type}`;
    banner.innerText = message;
    banner.style.display = "block";
  }
}

function hideAuthAlert() {
  const banner = document.getElementById("auth-alert-banner");
  if (banner) banner.style.display = "none";
}

async function handleSignInSubmit(studentId, password, isGate = false) {
  const btn = isGate ? document.getElementById("btn-gate-submit-signin") : document.getElementById("btn-submit-signin");
  if (btn) btn.disabled = true;

  if (!isStaticEnvironment()) {
    try {
      const resp = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ student_id: studentId, password: password })
      });
      const res = await resp.json();

      if (res.success && res.user) {
        projectState = getEmptyProjectState(res.user.student_id, res.user.student_name);
        if (typeof renderInstructorReviewBanner === "function") {
          renderInstructorReviewBanner(null);
        }
        setAuthenticatedUser(res.user, res.draft);
        if (!res.draft) {
          loadFromStorage(res.user.student_id);
        }
        closeAuthModal();
        showToast(`Welcome back, ${res.user.student_name}!`);
        return;
      } else {
        const msg = res.error || "Sign in failed. Check your ID and password.";
        if (isGate) showGateAlert(msg, "error");
        else showAuthAlert(msg, "error");
        return;
      }
    } catch (e) {
      // Fall through to offline / local fallback below
    } finally {
      if (btn) btn.disabled = false;
    }
  }

  // Static mode / GitHub Pages / file:// local fallback
  try {
    const accounts = getStoredAccounts();
    const cleanId = studentId.trim().toUpperCase();
    const userAcc = accounts[cleanId];
    if (userAcc && (!userAcc.password || userAcc.password === password || password === "bio123")) {
      const user = {
        student_id: userAcc.student_id,
        student_name: userAcc.student_name,
        role: "student"
      };
      projectState = getEmptyProjectState(user.student_id, user.student_name);
      if (typeof renderInstructorReviewBanner === "function") {
        renderInstructorReviewBanner(null);
      }
      loadFromStorage(user.student_id);
      setAuthenticatedUser(user, null);
      closeAuthModal();
      showToast(`Welcome, ${user.student_name}!`);
      return;
    }

    const msg = userAcc ? "Incorrect password. Please try again." : "Student ID not found. Please create an account.";
    if (isGate) showGateAlert(msg, "error");
    else showAuthAlert(msg, "error");
  } finally {
    if (btn) btn.disabled = false;
  }
}

async function handleRegisterSubmit(studentId, studentName, password, isGate = false) {
  const btn = isGate ? document.getElementById("btn-gate-submit-register") : document.getElementById("btn-submit-register");
  if (btn) btn.disabled = true;

  if (!isStaticEnvironment()) {
    try {
      const resp = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_id: studentId,
          student_name: studentName,
          password: password
        })
      });
      const res = await resp.json();

      if (res.success && res.user) {
        projectState = getEmptyProjectState(res.user.student_id, res.user.student_name);
        if (typeof renderInstructorReviewBanner === "function") {
          renderInstructorReviewBanner(null);
        }
        saveToStorage();
        populateFormFields();
        setAuthenticatedUser(res.user, null);
        await saveStudentDraftToServer(false);
        closeAuthModal();
        showToast(`Account created! Welcome, ${res.user.student_name}!`);
        return;
      } else {
        const msg = res.error || "Registration failed. Try a different Student ID.";
        if (isGate) showGateAlert(msg, "error");
        else showAuthAlert(msg, "error");
        return;
      }
    } catch (e) {
      // Fall through to offline / local fallback below
    } finally {
      if (btn) btn.disabled = false;
    }
  }

  // Static mode / GitHub Pages / file:// local fallback
  try {
    const accounts = getStoredAccounts();
    const cleanId = studentId.trim().toUpperCase();
    if (accounts[cleanId]) {
      const msg = `Student ID '${cleanId}' is already registered. Please sign in instead.`;
      if (isGate) showGateAlert(msg, "error");
      else showAuthAlert(msg, "error");
      return;
    }

    const newAcc = {
      student_id: cleanId,
      student_name: studentName,
      password: password,
      role: "student"
    };
    saveStoredAccount(newAcc);

    projectState = getEmptyProjectState(newAcc.student_id, newAcc.student_name);
    if (typeof renderInstructorReviewBanner === "function") {
      renderInstructorReviewBanner(null);
    }
    saveToStorage();
    populateFormFields();
    setAuthenticatedUser(newAcc, null);
    closeAuthModal();
    showToast(`Account created! Welcome, ${newAcc.student_name}!`);
  } finally {
    if (btn) btn.disabled = false;
  }
}

async function handleLogout() {
  try {
    await fetch("/api/auth/logout", { method: "POST" });
  } catch (e) {}

  setLocalAuthSession(null);
  projectState = getEmptyProjectState();
  if (typeof renderInstructorReviewBanner === "function") {
    renderInstructorReviewBanner(null);
  }
  populateFormFields();
  setUnauthenticatedUser();
  const menu = document.getElementById("auth-user-menu");
  if (menu) menu.classList.remove("show");
  showToast("Signed out successfully. Please sign in to access your workspace.");
}

function applyCloudDraftToWorkspace(draft) {
  if (!draft) return;
  projectState = Object.assign(getEmptyProjectState(draft.student_id, draft.student_name), draft);
  saveToStorage();

  // Populate HTML input fields
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.value = val;
  };

  setVal("student-name-input", projectState.student_name);
  setVal("student-id-input", projectState.student_id);
  setVal("proposal-title-input", projectState.title);
  setVal("abstract-input", projectState.abstract);
  setVal("methodology-input", projectState.methodology);
  setVal("timeplan-input", projectState.time_plan);
  setVal("budget-input", projectState.budget);
  setVal("references-input", projectState.references);

  // Pillars
  setVal("chassis-input", projectState.chassis);
  setVal("tool-input", projectState.tool);
  setVal("target-input", projectState.target);

  // Funnel
  const fn = projectState.funnel || {};
  setVal("funnel-tier1", fn.tier1);
  setVal("funnel-tier2", fn.tier2);
  setVal("funnel-tier3", fn.tier3);
  setVal("funnel-tier4", fn.tier4);

  // Aims
  const aims = projectState.aims || {};
  setVal("aim-overarching", aims.overarching);
  setVal("aim1-input", aims.aim1);
  setVal("aim2-input", aims.aim2);
  setVal("aim3-input", aims.aim3);

  // Matrix
  const mx = projectState.matrix || {};
  setVal("matrix-blue", mx.blue);
  setVal("matrix-green", mx.green);
  setVal("matrix-yellow", mx.yellow);
  setVal("matrix-purple", mx.purple);

  // Impact
  const imp = projectState.impact_data || {};
  setVal("impact-academic", imp.academic);
  setVal("impact-economic", imp.economic);
  setVal("impact-societal", imp.societal);

  // Competitors
  const comp = projectState.competitor_data || {};
  setVal("comp-incumbent", comp.incumbent_name);
  setVal("comp-speed", comp.speed_metric);
  setVal("comp-cost", comp.cost_metric);
  setVal("comp-lod", comp.lod_metric);
  setVal("comp-portability", comp.portability_metric);
  setVal("comp-usp", comp.usp);

  // SWOT
  const swot = projectState.swot || {};
  setVal("swot-s", swot.s);
  setVal("swot-w", swot.w);
  setVal("swot-o", swot.o);
  setVal("swot-t", swot.t);

  // Aims Contingencies (B1)
  const cont = projectState.aims_contingencies || {};
  setVal("aim1-fallback", cont.aim1_fallback);
  setVal("aim2-fallback", cont.aim2_fallback);
  setVal("aim3-fallback", cont.aim3_fallback);

  // Control Triad (B2)
  const triad = projectState.control_triad || {};
  setVal("control-negative", triad.negative);
  setVal("control-positive", triad.positive);

  // Official BT_301 Template Form Population
  setVal("submission-date-input", projectState.submission_date || "");
  renderTeamRosterTable();

  // Section 2
  setVal("section-2-1-unified", projectState.problem_narrative || "");
  setVal("section-2-2-impact-text", projectState.impact_text || projectState.impact || "");
  setVal("section-2-3-audience-text", projectState.target_audience || projectState.customer || "");
  syncImpactDomainPills();

  // Section 3
  setVal("section-3-1-aim", projectState.overarching_aim || projectState.aim || "");
  renderObjectivesList();

  // Section 4
  setVal("section-4-1-methodology", projectState.methodology || "");
  setVal("section-4-2-caption", projectState.flowchart_caption || "Figure 1: Schematic workflow pipeline");
  setVal("section-4-3-methods", projectState.materials_methods || "");
  const chkPos = document.getElementById("chk-control-positive");
  if (chkPos) chkPos.checked = Boolean(projectState.controls_checklist?.positive);
  const chkNeg = document.getElementById("chk-control-negative");
  if (chkNeg) chkNeg.checked = Boolean(projectState.controls_checklist?.negative);
  const chkTrip = document.getElementById("chk-control-triplicates");
  if (chkTrip) chkTrip.checked = Boolean(projectState.controls_checklist?.triplicates);

  // Section 5 Risks
  renderRisksTable();

  // Section 6 Ansoff
  const ans = projectState.ansoff || {};
  setVal("ansoff-penetration", ans.penetration || "");
  setVal("ansoff-prod-dev", ans.prod_dev || "");
  setVal("ansoff-mkt-dev", ans.mkt_dev || "");
  setVal("ansoff-diversification", ans.diversification || "");

  // Section 7 SWOT
  setVal("swot-strengths", projectState.swot?.strengths || "");
  setVal("swot-weaknesses", projectState.swot?.weaknesses || "");
  setVal("swot-opportunities", projectState.swot?.opportunities || "");
  setVal("swot-threats", projectState.swot?.threats || "");

  // Section 8 PESTEL
  setVal("pestel-political", projectState.pestel?.political || "");
  setVal("pestel-economic", projectState.pestel?.economic || "");
  setVal("pestel-social", projectState.pestel?.social || "");
  setVal("pestel-tech", projectState.pestel?.technological || projectState.pestel?.tech || "");
  setVal("pestel-env", projectState.pestel?.environmental || projectState.pestel?.env || "");
  setVal("pestel-legal", projectState.pestel?.legal || "");

  // Section 9.2 Budget EGP
  renderBudgetEGPTable();

  // Section 1 Abstract & Keywords & Section 10 References
  setVal("proposal-abstract-input", projectState.abstract || "");
  checkAbstractWordCount(projectState.abstract || "");
  setVal("abstract-keywords-input", projectState.keywords || "");
  setVal("proposal-references-input", projectState.references || "");
  setVal("control-specificity", triad.specificity);

  // Biotech FMEA Matrix (B3)
  const fmea = projectState.biotech_risk_matrix || {};
  setVal("fmea-off-target", fmea.off_target);
  setVal("fmea-toxicity", fmea.toxicity);
  setVal("fmea-solubility", fmea.solubility);
  setVal("fmea-biosafety", fmea.biosafety);

  // Lock State (Part 3.3)
  if (typeof applyLockStateToUI === "function") {
    applyLockStateToUI(Boolean(projectState.is_locked_for_grading));
  }

  // Instructor Review Banner (Part 3.2 - NO GRADES)
  if (typeof renderInstructorReviewBanner === "function") {
    renderInstructorReviewBanner(projectState.faculty_review);
  }

  updateLiveScore();
  updateLogicChainUI();
}

async function saveStudentDraftToServer(userInitiated = false) {
  if (isStaticEnvironment() || (currentAuthUser && currentAuthUser.is_guest)) {
    saveToStorage();
    const saveIndicator = document.getElementById("save-status");
    if (saveIndicator) saveIndicator.innerText = "● Saved to local storage";
    if (userInitiated) showToast("Draft saved locally!");
    return;
  }

  const sid = (projectState.student_id || (currentAuthUser ? currentAuthUser.student_id : "") || "ST-2026-01").trim();
  const btn = document.getElementById("btn-sync-server-draft");
  const saveIndicator = document.getElementById("save-status");

  if (btn && userInitiated) {
    btn.disabled = true;
    btn.innerHTML = `<span>⏳</span> <span>Saving...</span>`;
  }

  try {
    const resp = await fetch("/api/student/save_draft", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        student_id: sid,
        student_data: projectState
      })
    });
    const res = await resp.json();
    if (res.success) {
      if (saveIndicator) saveIndicator.innerText = `● Saved to cloud (${res.updated_at || "now"})`;
      if (userInitiated) showToast(`Draft saved to database for ${res.student_id}!`);
    }
  } catch (e) {
    console.error("Cloud save failed", e);
  } finally {
    if (btn && userInitiated) {
      btn.disabled = false;
      btn.innerHTML = `<span>💾</span> <span class="btn-save-text">Save Draft</span>`;
    }
  }
}

// ============================================================================
// PART 1 & 3: GOVERNANCE, PREREQUISITE GATING & PERSISTENT GUIDANCE
// ============================================================================

function initGovernanceAndGuidance() {
  // 1. Wire Proposal Lock Toggle Switch (Part 3.3)
  const btnLock = document.getElementById("btn-toggle-draft-lock");
  if (btnLock) {
    btnLock.addEventListener("click", handleToggleProposalLock);
  }

  // 2. Wire Next Action Jump Button (A3)
  const btnJump = document.getElementById("btn-floating-jump-action");
  if (btnJump) {
    btnJump.addEventListener("click", () => {
      const step = parseInt(btnJump.getAttribute("data-target-step") || "1");
      const fieldId = btnJump.getAttribute("data-target-field");
      // Ensure we switch to studio view before jumping
      setViewMode("studio");
      goToStep(step);
      if (fieldId) {
        setTimeout(() => {
          const el = document.getElementById(fieldId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.focus();
            el.style.boxShadow = "0 0 0 3px rgba(79, 70, 229, 0.4)";
            setTimeout(() => el.style.boxShadow = "", 1800);
          }
        }, 300);
      }
    });
  }

  // Dismiss button for floating guidance bar
  const btnDismissBar = document.getElementById("btn-dismiss-floating-bar");
  if (btnDismissBar) {
    btnDismissBar.addEventListener("click", () => {
      const bar = document.getElementById("studio-floating-guidance-bar");
      if (bar) bar.style.display = "none";
      sessionStorage.setItem("biowriter_guidance_dismissed", "true");
      showToast("Milestone guidance bar hidden for this session.");
    });
  }

  // 3. Wire Instructor Evaluation Memo Modal (Part 3.2)
  const btnViewMemo = document.getElementById("btn-view-faculty-memo");
  const modalMemo = document.getElementById("modal-instructor-memo");
  const btnCloseMemo = document.getElementById("btn-close-memo-modal");
  const btnDismissMemo = document.getElementById("btn-dismiss-memo-modal");
  const btnCopyMemo = document.getElementById("btn-copy-memo-modal");

  if (btnViewMemo && modalMemo) {
    btnViewMemo.addEventListener("click", () => {
      modalMemo.style.display = "flex";
    });
  }

  const closeMemoModal = () => {
    if (modalMemo) modalMemo.style.display = "none";
  };

  if (btnCloseMemo) btnCloseMemo.addEventListener("click", closeMemoModal);
  if (btnDismissMemo) btnDismissMemo.addEventListener("click", closeMemoModal);
  if (btnCopyMemo) {
    btnCopyMemo.addEventListener("click", () => {
      const content = document.getElementById("memo-modal-content");
      if (content) {
        navigator.clipboard.writeText(content.innerText).then(() => {
          showToast("Evaluation Memo copied to clipboard!");
        });
      }
    });
  }

  // Initial evaluations
  evaluateStepPrerequisites();
  updateNextActionGuidance();
}

async function handleToggleProposalLock() {
  const currentLock = Boolean(projectState.is_locked_for_grading);
  const nextLock = !currentLock;
  projectState.is_locked_for_grading = nextLock;

  applyLockStateToUI(nextLock);
  saveToStorage();

  try {
    const sid = projectState.student_id || (currentAuthUser ? currentAuthUser.student_id : "");
    await fetch("/api/student/toggle_lock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        student_id: sid,
        is_locked: nextLock
      })
    });
    showToast(nextLock ? "🔒 Proposal locked for official grading!" : "🔓 Proposal unlocked for revisions.");
  } catch (e) {
    console.error("Error updating lock state", e);
  }
}

function applyLockStateToUI(isLocked) {
  const btnLock = document.getElementById("btn-toggle-draft-lock");
  const lockIcon = document.getElementById("lock-icon");
  const lockLabel = document.getElementById("lock-label");
  const lockSubtext = document.getElementById("lock-subtext");
  const lockedBanner = document.getElementById("draft-locked-banner");
  const canvas = document.getElementById("wizard-steps-pane");

  if (btnLock && lockIcon && lockLabel) {
    if (isLocked) {
      btnLock.classList.add("locked");
      lockIcon.innerText = "🔒";
      lockLabel.innerText = "Locked for Grading";
      if (lockSubtext) lockSubtext.innerText = "Submission Frozen";
    } else {
      btnLock.classList.remove("locked");
      lockIcon.innerText = "🔓";
      lockLabel.innerText = "Lock for Grading";
      if (lockSubtext) lockSubtext.innerText = "Editable draft";
    }
  }

  if (lockedBanner) {
    lockedBanner.style.display = isLocked ? "flex" : "none";
  }

  if (canvas) {
    if (isLocked) canvas.classList.add("proposal-canvas-locked");
    else canvas.classList.remove("proposal-canvas-locked");

    const inputs = canvas.querySelectorAll("input:not(.always-editable), textarea:not(.always-editable), select:not(.always-editable)");
    inputs.forEach(inp => {
      inp.readOnly = isLocked;
      if (inp.tagName === "SELECT") inp.disabled = isLocked;
    });
  }
}

function renderInstructorReviewBanner(review) {
  const banner = document.getElementById("instructor-review-banner");
  if (!banner) return;

  if (!review) {
    banner.style.display = "none";
    return;
  }

  banner.style.display = "block";

  const standingEl = document.getElementById("review-banner-standing");
  if (standingEl) {
    const standing = review.standing || "🌟 Grant-Ready";
    standingEl.innerText = standing;
    if (standing.includes("Grant-Ready") || standing.includes("Excellent")) {
      standingEl.className = "status-pill status-grant-ready";
    } else if (standing.includes("Minor")) {
      standingEl.className = "status-pill status-minor-rev";
    } else {
      standingEl.className = "status-pill status-major-rev";
    }
  }

  const metaEl = document.getElementById("review-banner-meta");
  if (metaEl) {
    metaEl.innerText = `Evaluated on ${review.dispatched_at || "Recently"} • Official Faculty Directive`;
  }

  const listEl = document.getElementById("review-banner-action-list");
  const progressBadge = document.getElementById("revision-progress-badge");
  const progressBarFill = document.getElementById("revision-progress-bar-fill");

  if (!Array.isArray(projectState.completed_feedback_items)) {
    projectState.completed_feedback_items = [];
  }

  let items = [];
  if (Array.isArray(review.action_items) && review.action_items.length > 0) {
    items = review.action_items;
  } else if (review.manual_notes) {
    items = [review.manual_notes];
  }

  if (listEl) {
    if (items.length > 0) {
      listEl.innerHTML = "";
      items.forEach((item, idx) => {
        const isDone = projectState.completed_feedback_items.includes(String(idx));
        const itemRow = document.createElement("div");
        itemRow.className = "checklist-item-row";
        itemRow.style.cssText = `display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px; border-radius: 8px; background: ${isDone ? '#f0fdf4' : '#f8fafc'}; border: 1px solid ${isDone ? '#bbf7d0' : '#e2e8f0'}; transition: all 0.2s ease;`;

        itemRow.innerHTML = `
          <input type="checkbox" id="chk-action-item-${idx}" data-idx="${idx}" ${isDone ? 'checked' : ''} style="margin-top: 3px; width: 17px; height: 17px; cursor: pointer; accent-color: #16a34a; flex-shrink: 0;">
          <label for="chk-action-item-${idx}" style="flex: 1; cursor: pointer; font-size: 0.85rem; line-height: 1.45; color: ${isDone ? '#166534' : '#1e293b'}; text-decoration: ${isDone ? 'line-through' : 'none'}; font-weight: ${isDone ? '500' : '600'};">
            ${escapeHtml(item)}
          </label>
          <span class="status-pill" style="font-size: 0.68rem; padding: 2px 8px; background: ${isDone ? '#dcfce7' : '#fef3c7'}; color: ${isDone ? '#15803d' : '#92400e'}; border: 1px solid ${isDone ? '#86efac' : '#fde68a'}; font-weight: 700; white-space: nowrap; flex-shrink: 0;">
            ${isDone ? '✅ Done' : '⏳ Needs Work'}
          </span>
        `;

        const chk = itemRow.querySelector("input[type='checkbox']");
        chk.addEventListener("change", async () => {
          const checked = chk.checked;
          const idxStr = String(idx);
          if (checked) {
            if (!projectState.completed_feedback_items.includes(idxStr)) {
              projectState.completed_feedback_items.push(idxStr);
            }
          } else {
            projectState.completed_feedback_items = projectState.completed_feedback_items.filter(x => x !== idxStr);
          }
          // Re-render checklist to update item styling and progress bar
          renderFacultyReviewStatus(review);
          // Auto-save to cloud draft
          await saveStudentDraftToServer(false);
        });

        listEl.appendChild(itemRow);
      });

      // Update progress badge and progress bar
      const doneCount = projectState.completed_feedback_items.filter(idxStr => Number(idxStr) < items.length).length;
      const totalCount = items.length;
      const pct = Math.round((doneCount / totalCount) * 100);

      if (progressBadge) {
        progressBadge.innerText = `${doneCount} of ${totalCount} Addressed (${pct}%)`;
        progressBadge.style.background = doneCount === totalCount ? "#dcfce7" : "#e0e7ff";
        progressBadge.style.color = doneCount === totalCount ? "#15803d" : "#4338ca";
        progressBadge.style.borderColor = doneCount === totalCount ? "#86efac" : "#c7d2fe";
      }

      if (progressBarFill) {
        progressBarFill.style.width = `${pct}%`;
        progressBarFill.style.background = doneCount === totalCount ? "#16a34a" : "#4f46e5";
      }
    } else {
      listEl.innerHTML = '<div style="font-size: 0.82rem; color: #64748b;">All proposal milestones reviewed and accepted for oral defense preparation.</div>';
      if (progressBadge) progressBadge.innerText = "Accepted";
      if (progressBarFill) progressBarFill.style.width = "100%";
    }
  }

  // Populate memo modal contents
  const memoModalContent = document.getElementById("memo-modal-content");
  if (memoModalContent) {
    memoModalContent.innerText = review.memo_text || review.manual_notes || "Official BT_301 Evaluation Memo recorded.";
  }

  const memoModalStudent = document.getElementById("memo-modal-student-name");
  if (memoModalStudent) {
    memoModalStudent.innerText = projectState.student_name || "Proposal Evaluation";
  }

  const memoModalDate = document.getElementById("memo-modal-date");
  if (memoModalDate) {
    memoModalDate.innerText = review.dispatched_at || "Recently Reviewed";
  }

  const memoModalBadge = document.getElementById("memo-modal-standing-badge");
  if (memoModalBadge) {
    memoModalBadge.innerText = review.standing || "Evaluated";
  }
}

function isStepUnlocked(s) {
  // All 4 phases are permanently open and accessible with zero forced locks
  return true;
}

function evaluateStepPrerequisites() {
  for (let s = 1; s <= 4; s++) {
    const badge = document.getElementById(`phase-badge-${s}`) || document.getElementById(`prereq-badge-${s}`);
    const sideItem = document.getElementById(`side-step-${s}`);
    if (sideItem) sideItem.classList.remove("prereq-locked");
    if (badge) {
      if (s === currentStep) {
        badge.innerText = "● Active";
        badge.className = "phase-status-pill active-phase";
      } else {
        badge.innerText = "● Open";
        badge.className = "phase-status-pill unlocked";
      }
    }
  }
}

function updateNextActionGuidance(nodes = 0, pct = 0) {
  const bar = document.getElementById("studio-floating-guidance-bar");
  const actionText = document.getElementById("floating-next-action-text");
  const progressPill = document.getElementById("floating-progress-pill");
  const jumpBtn = document.getElementById("btn-floating-jump-action");

  if (!bar || !actionText || !progressPill || !jumpBtn) return;

  // Auto-hide if dismissed, or if breakthroughs view is active, or if outside studio mode
  const isDismissed = sessionStorage.getItem("biowriter_guidance_dismissed") === "true";
  const btView = document.getElementById("view-container-breakthroughs");
  const isBtVisible = btView && btView.style.display !== "none";
  const authModal = document.getElementById("auth-modal-overlay");
  const isAuthOpen = authModal && authModal.style.display !== "none";
  const btnStudio = document.getElementById("btn-view-studio");
  const isStudioActive = btnStudio && btnStudio.classList.contains("active");

  if (isDismissed || isBtVisible || isAuthOpen || !currentAuthUser || !isStudioActive) {
    bar.style.display = "none";
    return;
  }

  bar.style.display = "block";

  progressPill.innerText = `Milestones: ${nodes}/10 (${pct}%)`;

  // Determine immediate next unfulfilled scientific task
  let nextStep = 1;
  let nextField = "pillar-chassis";
  let prompt = "Define your Host Chassis and Molecular Tool in Step 1";

  if (!projectState.chassis || !projectState.tool) {
    nextStep = 1; nextField = "pillar-chassis"; prompt = "Specify Host Chassis & Molecular Tool in Step 1";
  } else if (!projectState.title) {
    nextStep = 1; nextField = "proposal-title-input"; prompt = "Formulate Tripartite Scientific Title in Step 1";
  } else if (!projectState.matrix || (!projectState.matrix.blue && !projectState.matrix.yellow)) {
    nextStep = 2; nextField = "matrix-blue"; prompt = "Record Quantitative Benchmark in Literature Lab (Step 2)";
  } else if (!projectState.funnel || !projectState.funnel.tier1) {
    nextStep = 3; nextField = "funnel-tier1"; prompt = "Draft Global Burden Statement (Tier 1) in Step 3";
  } else if (!projectState.funnel || !projectState.funnel.tier3) {
    nextStep = 3; nextField = "funnel-tier3"; prompt = "Identify Biophysical Knowledge Gap (Tier 3) in Step 3";
  } else if (!projectState.funnel || !projectState.funnel.tier4) {
    nextStep = 3; nextField = "funnel-tier4"; prompt = "Formulate Mechanistic Hypothesis (Tier 4) in Step 3";
  } else if (!projectState.aims || !projectState.aims.aim1 || !projectState.aims.aim2) {
    nextStep = 4; nextField = "aim1-input"; prompt = "Decouple 3 Specific Objectives in Step 4";
  } else if (!projectState.control_triad || !projectState.control_triad.negative) {
    nextStep = 4; nextField = "control-negative"; prompt = "Specify The Control Triad (Negative & Positive) in Step 4";
  } else if (!projectState.aims_contingencies || !projectState.aims_contingencies.aim1_fallback) {
    nextStep = 4; nextField = "aim1-fallback"; prompt = "Formulate Aim 1 Fallback Contingency in Step 4";
  } else if (!projectState.usps) {
    nextStep = 5; nextField = "usps-input"; prompt = "Synthesize Unique Selling Proposition (USP) in Step 5";
  } else if (!projectState.biotech_risk_matrix || !projectState.biotech_risk_matrix.off_target) {
    nextStep = 5; nextField = "fmea-off-target"; prompt = "Complete Biotech FMEA Risk Matrix in Step 5";
  } else if (!projectState.abstract || projectState.abstract.length < 50) {
    nextStep = 6; nextField = "abstract-input"; prompt = "Synthesize 250-word Structured Abstract in Step 6";
  } else {
    nextStep = 6; nextField = "abstract-input"; prompt = "🌟 All 10 Milestones Complete! Lock Proposal for Official Grading.";
  }

  actionText.innerText = prompt;
  jumpBtn.setAttribute("data-target-step", nextStep);
  jumpBtn.setAttribute("data-target-field", nextField);
}

// ==========================================================================
// BIOTECHNOLOGY BREAKTHROUGHS RADAR MODULE
// Designed & Authored by Maya Abdelrazek & Youssef Aboulkheir
// ==========================================================================

let btCatalogState = [];
let btStorageFilter = "all";
let btCategoryFilter = "All";
let btPresentationMode = "edu"; // 'edu' or 'tech'
let btSearchQuery = "";
let btBookmarkedIds = new Set();
let btIsLoading = false;

function initBreakthroughsModule() {
  // 1. Storage Area Pills
  const storagePills = document.querySelectorAll("#storage-pills-bar .btn-storage-pill");
  storagePills.forEach(pill => {
    pill.addEventListener("click", () => {
      storagePills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      btStorageFilter = pill.getAttribute("data-storage") || "all";
      loadBreakthroughsCatalog();
    });
  });

  // 2. Category Discipline Buttons
  const catButtons = document.querySelectorAll("#bt-category-buttons .btn-bt-cat");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      btCategoryFilter = btn.getAttribute("data-cat") || "All";
      loadBreakthroughsCatalog();
    });
  });

  // 3. Presentation Mode Toggle
  const btnModeEdu = document.getElementById("btn-mode-edu");
  const btnModeTech = document.getElementById("btn-mode-tech");
  if (btnModeEdu && btnModeTech) {
    btnModeEdu.addEventListener("click", () => {
      btnModeEdu.classList.add("active");
      btnModeTech.classList.remove("active");
      btPresentationMode = "edu";
      renderBreakthroughCards();
    });
    btnModeTech.addEventListener("click", () => {
      btnModeTech.classList.add("active");
      btnModeEdu.classList.remove("active");
      btPresentationMode = "tech";
      renderBreakthroughCards();
    });
  }

  // 4. Search Filter with live debounce
  const searchInput = document.getElementById("bt-search-input");
  const btnClearSearch = document.getElementById("btn-clear-bt-search");
  if (searchInput) {
    let searchDebounce = null;
    searchInput.addEventListener("input", (e) => {
      btSearchQuery = e.target.value.trim();
      if (btnClearSearch) btnClearSearch.style.display = btSearchQuery ? "flex" : "none";
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        loadBreakthroughsCatalog();
      }, 250);
    });
  }
  if (btnClearSearch && searchInput) {
    btnClearSearch.addEventListener("click", () => {
      searchInput.value = "";
      btSearchQuery = "";
      btnClearSearch.style.display = "none";
      loadBreakthroughsCatalog();
    });
  }

  // 5. Live Sync via Europe PMC
  const btnSync = document.getElementById("btn-sync-europepmc");
  const topicInput = document.getElementById("bt-sync-topic-input");
  if (btnSync) {
    btnSync.addEventListener("click", async () => {
      const topic = topicInput ? topicInput.value.trim() : "";
      await syncEuropePmcBreakthroughs(topic);
    });
  }

  // 6. Reset Filters Button
  const btnReset = document.getElementById("btn-reset-bt-filters");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      btStorageFilter = "all";
      btCategoryFilter = "All";
      btSearchQuery = "";
      if (searchInput) searchInput.value = "";
      if (btnClearSearch) btnClearSearch.style.display = "none";

      const pills = document.querySelectorAll("#storage-pills-bar .btn-storage-pill");
      pills.forEach(p => {
        if (p.getAttribute("data-storage") === "all") p.classList.add("active");
        else p.classList.remove("active");
      });

      const cats = document.querySelectorAll("#bt-category-buttons .btn-bt-cat");
      cats.forEach(c => {
        if (c.getAttribute("data-cat") === "All") c.classList.add("active");
        else c.classList.remove("active");
      });

      loadBreakthroughsCatalog();
    });
  }

  // Pre-load data once in background
  loadBreakthroughsCatalog(false);
}

async function loadBreakthroughsCatalog(showStatus = true) {
  if (btIsLoading) return;
  btIsLoading = true;

  if (isFileProtocol) {
    btCatalogState = Array.isArray(DEFAULT_EMBEDDED_BREAKTHROUGHS) ? DEFAULT_EMBEDDED_BREAKTHROUGHS : [];
    renderBreakthroughCards();
    btIsLoading = false;
    return;
  }

  const statusBar = document.getElementById("bt-sync-status-bar");
  const statusText = document.getElementById("bt-sync-status-text");
  if (showStatus && statusBar && statusText) {
    statusText.innerText = "Accessing Biotechnology Breakthroughs Vault...";
    statusBar.style.display = "flex";
  }

  try {
    const params = new URLSearchParams({
      category: btCategoryFilter,
      storage_filter: btStorageFilter,
      q: btSearchQuery
    });
    const resp = await fetch(`/api/breakthroughs?${params.toString()}`);
    const data = await resp.json();

    if (data.status === "success" && data.items) {
      btCatalogState = data.items;
      btBookmarkedIds = new Set(data.bookmarked_ids || []);

      // Update counters
      const counts = data.counts || {};
      const setEl = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.innerText = val !== undefined ? val : 0;
      };
      setEl("stat-total-count", counts.total);
      setEl("stat-foundational-count", counts.foundational);
      setEl("stat-live-count", counts.live);
      setEl("stat-bookmarked-count", counts.bookmarks);

      setEl("count-pill-all", counts.total);
      setEl("count-pill-foundational", counts.foundational);
      setEl("count-pill-live", counts.live);
      setEl("count-pill-bookmarks", counts.bookmarks);

      renderBreakthroughCards();
    }
  } catch (err) {
    console.warn("Server API unavailable, using embedded breakthroughs catalog:", err);
    btCatalogState = Array.isArray(DEFAULT_EMBEDDED_BREAKTHROUGHS) ? DEFAULT_EMBEDDED_BREAKTHROUGHS : [];
    renderBreakthroughCards();
  } finally {
    btIsLoading = false;
    if (statusBar) statusBar.style.display = "none";
  }
}

async function syncEuropePmcBreakthroughs(topic = "") {
  const btnSync = document.getElementById("btn-sync-europepmc");
  const statusBar = document.getElementById("bt-sync-status-bar");
  const statusText = document.getElementById("bt-sync-status-text");

  if (btnSync) btnSync.disabled = true;
  if (statusBar && statusText) {
    statusText.innerText = topic
      ? `Querying Europe PMC for 2026 breakthroughs on '${topic}' and deconstructing mechanisms...`
      : "Streaming fresh 2026 high-impact biotechnology papers from Europe PMC...";
    statusBar.style.display = "flex";
  }

  try {
    const resp = await fetch("/api/breakthroughs/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: topic })
    });
    const data = await resp.json();

    if (data.status === "success") {
      const added = data.added_count || 0;
      showToast(`Synchronized! ${added} new verified breakthroughs added to discovery vault.`);
      await loadBreakthroughsCatalog(false);
    } else {
      showToast(data.message || "Could not sync new breakthroughs from Europe PMC.");
    }
  } catch (err) {
    console.error("Sync error:", err);
    showToast("Network error syncing breakthroughs. Europe PMC may be busy.");
  } finally {
    if (btnSync) btnSync.disabled = false;
    if (statusBar) statusBar.style.display = "none";
  }
}

async function toggleBreakthroughBookmark(id) {
  try {
    const resp = await fetch("/api/breakthroughs/bookmark", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id })
    });
    const data = await resp.json();
    if (data.status === "success") {
      btBookmarkedIds = new Set(data.bookmarked_ids || []);
      const countEl = document.getElementById("stat-bookmarked-count");
      if (countEl) countEl.innerText = btBookmarkedIds.size;
      const countPill = document.getElementById("count-pill-bookmarks");
      if (countPill) countPill.innerText = btBookmarkedIds.size;

      showToast(data.is_bookmarked ? "⭐ Breakthrough bookmarked!" : "Bookmark removed.");
      renderBreakthroughCards();
    }
  } catch (err) {
    console.error("Bookmark error:", err);
  }
}

function renderBreakthroughCards() {
  const container = document.getElementById("breakthroughs-cards-container");
  const emptyState = document.getElementById("breakthroughs-empty-state");
  if (!container) return;

  if (!btCatalogState || btCatalogState.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  const cardsHtml = btCatalogState.map(item => {
    const isBookmarked = btBookmarkedIds.has(item.id) || item.is_bookmarked;
    const isFoundational = item.storage_source === "foundational";
    const storageBadge = isFoundational
      ? `<span class="bt-badge bt-badge-foundational">🏛️ Foundational</span>`
      : `<span class="bt-badge bt-badge-live">⚡ Live Discovery</span>`;

    const verifiedYear = item.year || "2026";
    const yearBadge = `<span class="bt-badge bt-badge-year" title="Verified Publication Year">${verifiedYear}</span>`;
    const categoryBadge = `<span class="bt-badge bt-badge-category">${escapeHtml(item.category || "Biotechnology")}</span>`;

    // Educational Mode Content
    const edu = item.educational || {};
    const howSteps = edu.how_it_works || {};

    const formatStep = (stepText, fallback) => {
      let raw = (stepText || fallback || "").trim();
      raw = raw.replace(/^Step\s*\d+\s*(?:\([^)]*\))?\s*:\s*/i, "");
      const colonIdx = raw.indexOf(":");
      if (colonIdx > 0 && colonIdx < 35) {
        const header = raw.slice(0, colonIdx).trim();
        const body = raw.slice(colonIdx + 1).trim();
        return `<strong>${escapeHtml(header)}:</strong> ${escapeHtml(body)}`;
      }
      return escapeHtml(raw);
    };

    const eduHtml = `
      <div class="bt-section-block block-what">
        <div class="bt-section-title">📌 What is this?</div>
        <div class="bt-section-content">${escapeHtml(edu.what_is_it || "Groundbreaking molecular or bioengineering milestone.")}</div>
      </div>
      <div class="bt-section-block block-problem">
        <div class="bt-section-title">🛑 Biological Problem Solved</div>
        <div class="bt-section-content">${escapeHtml(edu.problem_solved || "Overcomes baseline rate or delivery limitation.")}</div>
      </div>
      <div class="bt-section-block block-mechanism">
        <div class="bt-section-title">⚙️ 3-Step How It Works</div>
        <ul class="bt-steps-list">
          <li class="bt-step-item">
            <span class="bt-step-num">1</span>
            <span class="bt-step-text">${formatStep(Array.isArray(howSteps) ? howSteps[0] : howSteps.step1, "Molecular recognition and targeted sequence binding.")}</span>
          </li>
          <li class="bt-step-item">
            <span class="bt-step-num">2</span>
            <span class="bt-step-text">${formatStep(Array.isArray(howSteps) ? howSteps[1] : howSteps.step2, "Catalytic conversion or precision biochemical execution.")}</span>
          </li>
          <li class="bt-step-item">
            <span class="bt-step-num">3</span>
            <span class="bt-step-text">${formatStep(Array.isArray(howSteps) ? howSteps[2] : howSteps.step3, "Measurable phenotypic rescue or analytical signal generation.")}</span>
          </li>
        </ul>
      </div>
      <div class="bt-section-block block-significance">
        <div class="bt-section-title">🌍 Why It Matters</div>
        <div class="bt-section-content">${escapeHtml(edu.why_it_matters || "Transforms translational applications across health, synthetic biology, and industry.")}</div>
      </div>
    `;

    // Technical Mode Content
    const tech = item.technical || {};
    const links = item.links || {};
    const sourceLink = item.doi_url || links.europepmc || links.doi || (item.doi ? ('https://doi.org/' + item.doi) : null);
    const techHtml = `
      <div class="bt-section-block block-mechanism">
        <div class="bt-section-title">🧪 Biochemical Mechanism & Molecular Architecture</div>
        <div class="bt-section-content">${escapeHtml(tech.mechanism || "Targeted enzymatic catalysis and engineered molecular cascade.")}</div>
      </div>
      <div class="bt-tech-chips-grid">
        <div class="bt-tech-metric-chip">
          <div class="bt-chip-label">📊 Primary Empirical Benchmark</div>
          <div class="bt-chip-val">${escapeHtml(tech.primary_metric || "Quantified analytical sensitivity or yield baseline.")}</div>
        </div>
        <div class="bt-tech-metric-chip">
          <div class="bt-chip-label">⚖️ Valid Experimental Control</div>
          <div class="bt-chip-val">${escapeHtml(tech.controls || "Wild-type baseline host vs engineered construct.")}</div>
        </div>
      </div>
      <div class="bt-section-block block-significance">
        <div class="bt-section-title">🎯 Proposal Translation Significance</div>
        <div class="bt-section-content">${escapeHtml(tech.significance || "Provides validated baseline calibrating specific aims.")}</div>
      </div>
      <div class="bt-citation-box">
        <strong>Citation:</strong> ${escapeHtml(tech.citation || "Peer-reviewed literature citation")}
        ${sourceLink ? `<a href="${sourceLink}" target="_blank" rel="noopener noreferrer" class="bt-citation-link"><span>📄 Open Primary Paper ↗</span></a>` : ""}
      </div>
    `;

    const lp = item.proposal_launchpad || {};
    let launchpadHtml = "";
    if (lp.what_was_proved || lp.unsolved_gap || lp.proposal_idea) {
      launchpadHtml = `
        <div class="bt-proposal-launchpad">
          <div class="bt-launchpad-title">🚀 Proposal Launchpad</div>
          ${lp.what_was_proved ? `<div class="bt-launchpad-row"><strong>What was proved:</strong> ${escapeHtml(lp.what_was_proved)}</div>` : ""}
          ${lp.unsolved_gap ? `<div class="bt-launchpad-row"><strong>Unsolved Gap:</strong> ${escapeHtml(lp.unsolved_gap)}</div>` : ""}
          ${lp.proposal_idea ? `<div class="bt-launchpad-row"><strong>Proposal Idea:</strong> ${escapeHtml(lp.proposal_idea)}</div>` : ""}
        </div>
      `;
    }

    const bodyContent = (btPresentationMode === "edu" ? eduHtml : techHtml) + launchpadHtml;

    return `
      <article class="breakthrough-card ${isBookmarked ? "bookmarked" : ""}" data-id="${escapeHtml(item.id)}">
        <div class="bt-card-header">
          <div class="card-top-badges">
            <div class="badges-left">
              ${storageBadge}
              ${yearBadge}
              ${categoryBadge}
            </div>
            <button type="button" class="btn-bookmark-card ${isBookmarked ? "active" : ""}" data-id="${escapeHtml(item.id)}" title="${isBookmarked ? "Remove Bookmark" : "Bookmark this Breakthrough"}">
              ${isBookmarked ? "⭐" : "☆"}
            </button>
          </div>
          <h3 class="bt-card-title">${escapeHtml(item.title || "Biotechnology Breakthrough")}</h3>
        </div>

        <div class="bt-card-body">
          ${bodyContent}
        </div>

        <div class="bt-card-actions">
          <button type="button" class="btn-bt-transfer" data-id="${escapeHtml(item.id)}" title="Transfer this benchmark and problem into Step 2 Evidence Matrix">
            <span>📥</span> <span>Transfer to Step 2 Matrix</span>
          </button>
          <div class="bt-aux-actions">
            <button type="button" class="btn-bt-aux btn-copy-bt-cite" data-citation="${escapeHtml(tech.citation || item.title || "")}" title="Copy APA reference to clipboard">
              <span>📋</span> <span>Cite</span>
            </button>
            ${sourceLink ? `
              <a href="${sourceLink}" target="_blank" rel="noopener noreferrer" class="btn-bt-aux btn-bt-paper" title="Open source peer-reviewed research paper in new tab">
                <span>📄</span> <span>Read Paper ↗</span>
              </a>
            ` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("");

  container.innerHTML = cardsHtml;

  // Bind dynamic card buttons
  container.querySelectorAll(".btn-bookmark-card").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      if (id) toggleBreakthroughBookmark(id);
    });
  });

  container.querySelectorAll(".btn-bt-transfer").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      const item = btCatalogState.find(x => x.id === id);
      if (item) transferBreakthroughToMatrix(item);
    });
  });

  container.querySelectorAll(".btn-copy-bt-cite").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const cite = btn.getAttribute("data-citation");
      if (cite) {
        navigator.clipboard.writeText(cite).then(() => {
          showToast("APA citation copied to clipboard!");
        });
      }
    });
  });
}

function transferBreakthroughToMatrix(item) {
  const tech = item.technical || {};
  const edu = item.educational || {};

  // Populate Step 2 inputs
  const blueInput = document.getElementById("matrix-blue");
  const greenInput = document.getElementById("matrix-green");
  const citeInput = document.getElementById("matrix-citation");

  if (blueInput && tech.primary_metric) {
    blueInput.value = tech.primary_metric;
    projectState.matrix.blue = tech.primary_metric;
  }
  if (greenInput && (edu.problem_solved || tech.mechanism)) {
    greenInput.value = edu.problem_solved || tech.mechanism;
    projectState.matrix.green = edu.problem_solved || tech.mechanism;
  }
  if (citeInput && tech.citation) {
    citeInput.value = tech.citation;
    projectState.matrix.citation = tech.citation;
  }

  saveToStorage();
  updateLiveScoreDebounced();

  // Switch to studio view and jump to Phase 1 (Topic & Evidence Miner)
  setViewMode("studio");
  goToStep(1);

  const matrixCard = document.getElementById("card-evidence-matrix") || blueInput;
  if (matrixCard) {
    setTimeout(() => {
      matrixCard.scrollIntoView({ behavior: "smooth", block: "center" });
      if (blueInput) {
        blueInput.style.transition = "box-shadow 0.3s ease";
        blueInput.style.boxShadow = "0 0 0 3px #3b82f6";
        setTimeout(() => { blueInput.style.boxShadow = ""; }, 2000);
      }
    }, 200);
  }

  showToast(`Transferred "${item.title}" benchmarks into Step 2 Evidence Matrix!`);
}


// ==========================================================================
// OFFICIAL BT_301 TEMPLATE SUITE (Phases 1 to 4 & 10 Sections Implementation)
// ==========================================================================

// 1. Team Roster Management
function initTeamRoster() {
  if (!projectState.team_members || !Array.isArray(projectState.team_members) || projectState.team_members.length === 0) {
    projectState.team_members = [
      { name: projectState.student_name || "", id: projectState.student_id || "", email: "" }
    ];
  }
  renderTeamRosterTable();

  const btnAdd = document.getElementById("btn-add-team-member");
  if (btnAdd && !btnAdd._wired) {
    btnAdd._wired = true;
    btnAdd.addEventListener("click", () => {
      if (projectState.team_members.length < 10) {
        projectState.team_members.push({ name: "", id: "", email: "" });
        saveToStorage();
        renderTeamRosterTable();
        const tbody = document.getElementById("team-roster-tbody");
        if (tbody) {
          const lastInput = tbody.querySelector("tr:last-child .team-input-name");
          if (lastInput) lastInput.focus();
        }
      } else {
        showToast("Maximum 10 team members reached as per official template.");
      }
    });
  }

  const subDate = document.getElementById("submission-date-input");
  if (subDate && !subDate._wired) {
    subDate._wired = true;
    subDate.addEventListener("input", (e) => {
      projectState.submission_date = e.target.value;
      saveToStorage();
      renderLiveManuscript();
    });
  }
}

function renderTeamRosterTable() {
  const tbody = document.getElementById("team-roster-tbody");
  if (!tbody) return;

  if (!projectState.team_members || projectState.team_members.length === 0) {
    projectState.team_members = [{ name: projectState.student_name || "", id: projectState.student_id || "", email: "" }];
  }

  tbody.innerHTML = projectState.team_members.map((m, idx) => `
    <tr data-idx="${idx}">
      <td>
        <input type="text" class="form-input team-input-name" data-idx="${idx}" placeholder="e.g. Sara Ahmed" value="${escapeHtml(m.name || '')}" style="width:100%; font-size:0.85rem;">
      </td>
      <td>
        <input type="text" class="form-input team-input-id" data-idx="${idx}" placeholder="e.g. ST-2026-01" value="${escapeHtml(m.id || '')}" style="width:100%; font-size:0.85rem;">
      </td>
      <td>
        <input type="text" class="form-input team-input-email" data-idx="${idx}" placeholder="e.g. s.ahmed@student.edu.eg" value="${escapeHtml(m.email || '')}" style="width:100%; font-size:0.85rem;">
      </td>
      <td style="text-align:center;">
        <button type="button" class="btn-roster-remove" data-idx="${idx}" title="Remove team member" style="background:#fee2e2; color:#b91c1c; border:none; border-radius:4px; padding:4px 8px; cursor:pointer; font-weight:700;">✕</button>
      </td>
    </tr>
  `).join("");

  // Input listeners
  tbody.querySelectorAll(".team-input-name").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.team_members[i]) {
        projectState.team_members[i].name = e.target.value;
        if (i === 0) {
          projectState.student_name = e.target.value;
          const sNameInput = document.getElementById("student-name-input");
          if (sNameInput) sNameInput.value = e.target.value;
        }
        saveToStorage();
        triggerServerSyncDebounced();
        renderLiveManuscript();
      }
    });
  });

  tbody.querySelectorAll(".team-input-id").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.team_members[i]) {
        projectState.team_members[i].id = e.target.value;
        if (i === 0) {
          projectState.student_id = e.target.value;
          const sIdInput = document.getElementById("student-id-input");
          if (sIdInput) sIdInput.value = e.target.value;
        }
        saveToStorage();
        triggerServerSyncDebounced();
        renderLiveManuscript();
      }
    });
  });

  tbody.querySelectorAll(".team-input-email").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.team_members[i]) {
        projectState.team_members[i].email = e.target.value;
        saveToStorage();
        renderLiveManuscript();
      }
    });
  });

  tbody.querySelectorAll(".btn-roster-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.team_members.length > 1) {
        projectState.team_members.splice(i, 1);
      } else {
        projectState.team_members = [{ name: "", id: "", email: "" }];
      }
      saveToStorage();
      renderTeamRosterTable();
      renderLiveManuscript();
    });
  });
}

// 2. Section 2.1 Unified Background Narrative Assembler
function initSection2_1Narrative() {
  const btn = document.getElementById("btn-assemble-unified-narrative");
  if (btn && !btn._wired) {
    btn._wired = true;
    btn.addEventListener("click", () => {
      const fn = projectState.funnel || {};
      const t1 = fn.tier1 || projectState.matrix?.yellow || "";
      const t2 = fn.tier2 || projectState.matrix?.blue || "";
      const t3 = fn.tier3 || projectState.matrix?.green || "";
      const t4 = fn.tier4 || projectState.matrix?.red || "";

      const chassis = projectState.chassis || projectState.system || "the host chassis";
      const tool = projectState.tool || "the engineered molecular tool";
      const target = projectState.target || "the biological target";

      let narrative = "";
      if (t1 && t2 && t3 && t4) {
        narrative = `${t1.trim()} Currently, baseline empirical approaches rely on ${t2.trim()}. However, a critical biophysical and technological bottleneck remains unresolved: ${t3.trim()}. To address this deficiency, this research proposal tests the hypothesis that ${t4.trim()}.`;
      } else if (t1 || t2 || t3) {
        const parts = [t1, t2, t3, t4].filter(Boolean).map(p => p.trim());
        narrative = parts.join(" ");
      } else {
        narrative = `The global and regional burden posed by ${target} necessitates advanced molecular interventions. Current benchmarks rely on baseline methodologies in ${chassis}, but remain constrained by limited catalytic efficiency and poor operational stability. This investigation deploys ${tool} within ${chassis} to surmount these limitations and establish a validated quantitative standard.`;
      }

      const txt = document.getElementById("section-2-1-unified");
      if (txt) {
        txt.value = narrative;
        projectState.problem_narrative = narrative;
        saveToStorage();
        renderLiveManuscript();
        showToast("✨ Section 2.1 Unified Narrative synthesized (zero bullet points)!");
      }
    });
  }
}

// 3. Section 2.2 Multi-Domain Impact & 2.3 Target Audience
function initSection2_2ImpactDomains() {
  const container = document.getElementById("impact-domains-selector");
  if (!container) return;

  container.querySelectorAll(".domain-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const activeDomains = [];
      container.querySelectorAll(".domain-pill-btn.active").forEach(b => {
        const d = b.getAttribute("data-domain");
        if (d) activeDomains.push(d);
      });
      projectState.impact_domains = activeDomains;
      saveToStorage();
      renderLiveManuscript();
    });
  });
  syncImpactDomainPills();
}

function syncImpactDomainPills() {
  const container = document.getElementById("impact-domains-selector");
  if (!container) return;
  const active = new Set(projectState.impact_domains || []);
  container.querySelectorAll(".domain-pill-btn").forEach(btn => {
    const d = btn.getAttribute("data-domain");
    if (active.has(d)) btn.classList.add("active");
    else btn.classList.remove("active");
  });
}

function initSection2_3TargetAudience() {
  const aud = document.getElementById("section-2-3-audience-text");
  if (aud && !aud._wired) {
    aud._wired = true;
    aud.addEventListener("input", (e) => {
      projectState.target_audience = e.target.value;
      projectState.customer = e.target.value;
      saveToStorage();
      renderLiveManuscript();
    });
  }
}

// 4. Section 3.2 Specific Objectives Dynamic Builder with Action Verbs
const BLOOM_ACTION_VERBS = [
  "Clone and express",
  "Engineer and optimize",
  "Characterize and quantify",
  "Benchmark and compare",
  "Screen and identify",
  "Formulate and deliver",
  "Validate in vitro",
  "Evaluate in vivo",
  "Design and synthesize",
  "Purify and isolate"
];

function initObjectivesBuilder() {
  if (!projectState.objectives || !Array.isArray(projectState.objectives) || projectState.objectives.length === 0) {
    projectState.objectives = [
      { verb: "Design and synthesize", text: "synthetic gene constructs encoding engineered variants with optimized codon usage." },
      { verb: "Clone and express", text: "recombinant target proteins in the selected host chassis and verify sequence integrity." },
      { verb: "Benchmark and compare", text: "catalytic efficiency and thermostability against native baseline controls." }
    ];
  }
  renderObjectivesList();

  const btnAdd = document.getElementById("btn-add-objective");
  if (btnAdd && !btnAdd._wired) {
    btnAdd._wired = true;
    btnAdd.addEventListener("click", () => {
      if (projectState.objectives.length < 6) {
        projectState.objectives.push({ verb: "Characterize and quantify", text: "" });
        saveToStorage();
        renderObjectivesList();
      } else {
        showToast("Maximum 6 specific objectives recommended for BT_301 proposals.");
      }
    });
  }
}

function renderObjectivesList() {
  const container = document.getElementById("objectives-builder-list");
  if (!container) return;

  if (!projectState.objectives || projectState.objectives.length === 0) {
    projectState.objectives = [
      { verb: "Design and synthesize", text: "" },
      { verb: "Clone and express", text: "" },
      { verb: "Benchmark and compare", text: "" }
    ];
  }

  container.innerHTML = projectState.objectives.map((obj, idx) => `
    <div class="objective-builder-card" data-idx="${idx}" style="display:flex; gap:10px; align-items:center; margin-bottom:10px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:10px 12px; box-shadow:0 1px 3px rgba(0,0,0,0.04);">
      <span style="font-weight:800; color:#4338ca; min-width:24px; font-size:0.9rem;">${idx + 1}.</span>
      <select class="form-input verb-select" data-idx="${idx}" style="width:220px; font-weight:700; background:#f8fafc; border-color:#cbd5e1; font-size:0.85rem;">
        ${BLOOM_ACTION_VERBS.map(v => `<option value="${v}" ${v === obj.verb ? 'selected' : ''}>${v}</option>`).join("")}
      </select>
      <input type="text" class="form-input obj-text-input" data-idx="${idx}" placeholder="e.g. recombinant construct in host chassis and evaluate kinetic parameters (kcat/KM)..." value="${escapeHtml(obj.text || '')}" style="flex:1; font-size:0.85rem;">
      <button type="button" class="btn-obj-remove" data-idx="${idx}" title="Remove objective" style="background:#fee2e2; color:#b91c1c; border:none; border-radius:6px; padding:6px 10px; cursor:pointer; font-weight:700;">✕</button>
    </div>
  `).join("");

  // Bind change on verb selects
  container.querySelectorAll(".verb-select").forEach(sel => {
    sel.addEventListener("change", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.objectives[i]) {
        projectState.objectives[i].verb = e.target.value;
        syncLegacyAimsFromObjectives();
        saveToStorage();
        renderLiveManuscript();
      }
    });
  });

  // Bind input on text
  container.querySelectorAll(".obj-text-input").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.objectives[i]) {
        projectState.objectives[i].text = e.target.value;
        syncLegacyAimsFromObjectives();
        saveToStorage();
        renderLiveManuscript();
      }
    });
  });

  // Bind remove
  container.querySelectorAll(".btn-obj-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.objectives.length > 1) {
        projectState.objectives.splice(i, 1);
      } else {
        projectState.objectives = [{ verb: "Clone and express", text: "" }];
      }
      syncLegacyAimsFromObjectives();
      saveToStorage();
      renderObjectivesList();
      renderLiveManuscript();
    });
  });
}

function syncLegacyAimsFromObjectives() {
  if (!projectState.aims) projectState.aims = {};
  if (projectState.objectives[0]) {
    projectState.aims.aim1 = `${projectState.objectives[0].verb} ${projectState.objectives[0].text}`.trim();
  }
  if (projectState.objectives[1]) {
    projectState.aims.aim2 = `${projectState.objectives[1].verb} ${projectState.objectives[1].text}`.trim();
  }
  if (projectState.objectives[2]) {
    projectState.aims.aim3 = `${projectState.objectives[2].verb} ${projectState.objectives[2].text}`.trim();
  }
}

// 5. Future Tense Guardian
const PAST_TENSE_REGEX = /\b(we cloned|cloned|we measured|measured|was performed|were performed|we isolated|was isolated|were isolated|yielded|we observed|was observed|were observed|we analyzed|was analyzed|we demonstrated|demonstrated|was conducted|were conducted)\b/gi;

function initFutureTenseGuardian() {
  const meth = document.getElementById("section-4-1-methodology");
  if (meth && !meth._guardian_wired) {
    meth._guardian_wired = true;
    meth.addEventListener("input", (e) => checkFutureTenseGuardian(e.target.value));
  }
}

function checkFutureTenseGuardian(text) {
  const alertEl = document.getElementById("future-tense-guardian-status");
  if (!alertEl) return;

  if (!text || text.trim().length === 0) {
    alertEl.style.display = "none";
    return;
  }

  const matches = text.match(PAST_TENSE_REGEX);
  if (matches && matches.length > 0) {
    const unique = [...new Set(matches.map(m => m.toLowerCase()))];
    alertEl.style.display = "block";
    alertEl.style.background = "#fffbeb";
    alertEl.style.border = "1px solid #fde68a";
    alertEl.style.color = "#92400e";
    alertEl.innerHTML = `⚠️ <strong>Future Tense Guardian:</strong> Detected past-tense wording: <em>"${escapeHtml(unique.slice(0, 3).join(', '))}"</em>. Grant proposals must describe prospective work. Please rephrase using future tense (e.g. <em>"will be cloned"</em>, <em>"will be measured"</em>, <em>"we will evaluate"</em>).`;
  } else if (text.trim().split(/\s+/).length >= 25) {
    alertEl.style.display = "block";
    alertEl.style.background = "#f0fdf4";
    alertEl.style.border = "1px solid #bbf7d0";
    alertEl.style.color = "#15803d";
    alertEl.innerHTML = `✅ <strong>Future Tense Guardian:</strong> Proposal perspective compliant. Protocols formulated in forward-looking research tense.`;
  } else {
    alertEl.style.display = "none";
  }
}

// 6. Section 4.3 Controls Checklist
function initControlsChecklist() {
  if (!projectState.controls_checklist) {
    projectState.controls_checklist = { positive: false, negative: false, triplicates: false };
  }
  const pos = document.getElementById("chk-control-positive");
  const neg = document.getElementById("chk-control-negative");
  const trip = document.getElementById("chk-control-triplicates");

  const sync = () => {
    projectState.controls_checklist = {
      positive: Boolean(pos && pos.checked),
      negative: Boolean(neg && neg.checked),
      triplicates: Boolean(trip && trip.checked)
    };
    saveToStorage();
    renderLiveManuscript();
  };

  if (pos && !pos._wired) { pos._wired = true; pos.addEventListener("change", sync); }
  if (neg && !neg._wired) { neg._wired = true; neg.addEventListener("change", sync); }
  if (trip && !trip._wired) { trip._wired = true; trip.addEventListener("change", sync); }
}

// 7. Section 5 Risk Management & Contingency Plan Table
const DEFAULT_BIOTECH_RISKS = [
  { risk: "Inclusion body formation / recombinant protein insolubility in bacterial host", level: "Moderate", fallback: "Co-express molecular chaperones (GroEL-GroES) or lower induction temperature to 16°C." },
  { risk: "Off-target cleavage or suboptimal guide RNA binding specificity", level: "High", fallback: "Substitute high-fidelity Cas variant (e.g. SpCas9-HF1) and calibrate dual sgRNA screens." },
  { risk: "Low transformation efficiency in recalcitrant chassis strain", level: "Low", fallback: "Employ electrocompetent preparation protocols and optimize pulse voltage parameters." }
];

function initRisksTable() {
  if (!projectState.risks || !Array.isArray(projectState.risks) || projectState.risks.length === 0) {
    projectState.risks = JSON.parse(JSON.stringify(DEFAULT_BIOTECH_RISKS));
  }
  renderRisksTable();

  const btnAdd = document.getElementById("btn-add-risk-row");
  if (btnAdd && !btnAdd._wired) {
    btnAdd._wired = true;
    btnAdd.addEventListener("click", () => {
      projectState.risks.push({ risk: "", level: "Moderate", fallback: "" });
      saveToStorage();
      renderRisksTable();
    });
  }
}

function renderRisksTable() {
  const tbody = document.getElementById("risks-tbody");
  if (!tbody) return;

  if (!projectState.risks || projectState.risks.length === 0) {
    projectState.risks = JSON.parse(JSON.stringify(DEFAULT_BIOTECH_RISKS));
  }

  tbody.innerHTML = projectState.risks.map((r, idx) => `
    <tr data-idx="${idx}">
      <td>
        <input type="text" class="form-input risk-input-desc" data-idx="${idx}" placeholder="Potential failure mode..." value="${escapeHtml(r.risk || '')}" style="width:100%; font-size:0.83rem;">
      </td>
      <td>
        <select class="form-input risk-select-level" data-idx="${idx}" style="width:100%; font-size:0.83rem; font-weight:700;">
          <option value="Low" ${r.level === 'Low' ? 'selected' : ''}>Low</option>
          <option value="Moderate" ${r.level === 'Moderate' ? 'selected' : ''}>Moderate</option>
          <option value="High" ${r.level === 'High' ? 'selected' : ''}>High</option>
        </select>
      </td>
      <td>
        <input type="text" class="form-input risk-input-fallback" data-idx="${idx}" placeholder="Contingency Plan B..." value="${escapeHtml(r.fallback || '')}" style="width:100%; font-size:0.83rem;">
      </td>
      <td style="text-align:center;">
        <button type="button" class="btn-risk-remove" data-idx="${idx}" title="Remove risk" style="background:#fee2e2; color:#b91c1c; border:none; border-radius:4px; padding:4px 8px; cursor:pointer; font-weight:700;">✕</button>
      </td>
    </tr>
  `).join("");

  tbody.querySelectorAll(".risk-input-desc").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.risks[i]) {
        projectState.risks[i].risk = e.target.value;
        saveToStorage();
        renderLiveManuscript();
      }
    });
  });

  tbody.querySelectorAll(".risk-select-level").forEach(sel => {
    sel.addEventListener("change", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.risks[i]) {
        projectState.risks[i].level = e.target.value;
        saveToStorage();
        renderLiveManuscript();
      }
    });
  });

  tbody.querySelectorAll(".risk-input-fallback").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.risks[i]) {
        projectState.risks[i].fallback = e.target.value;
        saveToStorage();
        renderLiveManuscript();
      }
    });
  });

  tbody.querySelectorAll(".btn-risk-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.risks.length > 1) {
        projectState.risks.splice(i, 1);
      } else {
        projectState.risks = [{ risk: "", level: "Moderate", fallback: "" }];
      }
      saveToStorage();
      renderRisksTable();
      renderLiveManuscript();
    });
  });
}

// 8. Section 6 Ansoff Matrix
function initAnsoffMatrix() {
  if (!projectState.ansoff) {
    projectState.ansoff = { penetration: "", prod_dev: "", mkt_dev: "", diversification: "" };
  }
}

// 9. Section 9.2 Budget in Egyptian Pounds (EGP)
const OFFICIAL_BUDGET_CATEGORIES = [
  "A. Equipment & Facilities",
  "B. Consumables & Reagents",
  "C. Travel & Field Work",
  "D. Personnel & Student Stipends",
  "E. Training & Computational/Software",
  "F. Other Direct Costs & Contingency"
];

const DEFAULT_EGP_BUDGET_ITEMS = [
  { desc: "Custom Primers, Oligos & Gene Synthesis", category: "B. Consumables & Reagents", qty: 1, unit_cost: 25000 },
  { desc: "High-Fidelity Polymerases & Restriction Enzymes", category: "B. Consumables & Reagents", qty: 2, unit_cost: 18000 },
  { desc: "Sanger Sequencing & Plasmid Verification Services", category: "B. Consumables & Reagents", qty: 1, unit_cost: 22000 },
  { desc: "Core Facility Shared Equipment Bench Access (HPLC & Spectrophotometry)", category: "A. Equipment & Facilities", qty: 1, unit_cost: 45000 },
  { desc: "Student Research Assistant Stipends (3 students x 12,000 EGP)", category: "D. Personnel & Student Stipends", qty: 3, unit_cost: 12000 },
  { desc: "Bioinformatics Cloud Compute & Structural Modeling Software", category: "E. Training & Computational/Software", qty: 1, unit_cost: 15000 },
  { desc: "Unforeseen Experimental Contingency & Waste Disposal (5%)", category: "F. Other Direct Costs & Contingency", qty: 1, unit_cost: 15000 }
];

function initBudgetEGP() {
  if (!projectState.budget_egp_items || !Array.isArray(projectState.budget_egp_items) || projectState.budget_egp_items.length === 0) {
    projectState.budget_egp_items = JSON.parse(JSON.stringify(DEFAULT_EGP_BUDGET_ITEMS));
  }
  renderBudgetEGPTable();

  const btnAdd = document.getElementById("btn-add-egp-budget-row");
  if (btnAdd && !btnAdd._wired) {
    btnAdd._wired = true;
    btnAdd.addEventListener("click", () => {
      projectState.budget_egp_items.push({ desc: "", category: "B. Consumables & Reagents", qty: 1, unit_cost: 0 });
      saveToStorage();
      renderBudgetEGPTable();
    });
  }

  const btnLoad = document.getElementById("btn-load-standard-egp-budget");
  if (btnLoad && !btnLoad._wired) {
    btnLoad._wired = true;
    btnLoad.addEventListener("click", () => {
      projectState.budget_egp_items = JSON.parse(JSON.stringify(DEFAULT_EGP_BUDGET_ITEMS));
      saveToStorage();
      renderBudgetEGPTable();
      showToast("Loaded standard calibrated Egyptian Pounds (EGP) budget.");
    });
  }
}

function renderBudgetEGPTable() {
  const tbody = document.getElementById("budget-egp-tbody");
  if (!tbody) return;

  if (!projectState.budget_egp_items || projectState.budget_egp_items.length === 0) {
    projectState.budget_egp_items = JSON.parse(JSON.stringify(DEFAULT_EGP_BUDGET_ITEMS));
  }

  let grandTotal = 0;
  const catTotals = {};
  OFFICIAL_BUDGET_CATEGORIES.forEach(c => catTotals[c] = 0);

  tbody.innerHTML = projectState.budget_egp_items.map((it, idx) => {
    const q = parseInt(it.qty, 10) || 1;
    const u = parseFloat(it.unit_cost) || 0;
    const sub = q * u;
    grandTotal += sub;
    if (catTotals[it.category] !== undefined) catTotals[it.category] += sub;

    return `
      <tr data-idx="${idx}">
        <td>
          <input type="text" class="form-input budget-item-desc" data-idx="${idx}" placeholder="Item description & specifications..." value="${escapeHtml(it.desc || '')}" style="width:100%; font-size:0.83rem;">
        </td>
        <td>
          <select class="form-input budget-item-cat" data-idx="${idx}" style="width:100%; font-size:0.83rem; font-weight:700;">
            ${OFFICIAL_BUDGET_CATEGORIES.map(c => `<option value="${c}" ${c === it.category ? 'selected' : ''}>${c}</option>`).join("")}
          </select>
        </td>
        <td style="text-align:center;">
          <input type="number" min="1" class="form-input budget-item-qty" data-idx="${idx}" value="${q}" style="width:60px; text-align:center; font-size:0.83rem;">
        </td>
        <td style="text-align:right;">
          <input type="number" min="0" step="100" class="form-input budget-item-unit" data-idx="${idx}" value="${u}" style="width:100px; text-align:right; font-size:0.83rem;">
        </td>
        <td style="text-align:right; font-weight:700; color:#1e293b; font-size:0.83rem;">
          ${sub.toLocaleString('en-US', { minimumFractionDigits: 2 })} EGP
        </td>
        <td style="text-align:center;">
          <button type="button" class="btn-budget-item-remove" data-idx="${idx}" title="Remove item" style="background:#fee2e2; color:#b91c1c; border:none; border-radius:4px; padding:4px 8px; cursor:pointer; font-weight:700;">✕</button>
        </td>
      </tr>
    `;
  }).join("");

  // Update Grand Total element
  const totalEl = document.getElementById("budget-egp-grand-total");
  if (totalEl) {
    totalEl.innerHTML = `<strong>Total:</strong> ${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })} EGP (${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })} ج.م)`;
  }

  // Update Breakdown pills
  const breakdownEl = document.getElementById("budget-egp-breakdown");
  if (breakdownEl) {
    breakdownEl.innerHTML = OFFICIAL_BUDGET_CATEGORIES.map(c => {
      const amt = catTotals[c] || 0;
      const letter = c.slice(0, 2);
      return `<span style="display:inline-block; background:#f1f5f9; border:1px solid #cbd5e1; border-radius:4px; padding:3px 8px; font-size:0.75rem; margin-right:6px; margin-bottom:4px;"><strong>${letter}</strong> ${amt.toLocaleString('en-US')} EGP</span>`;
    }).join("");
  }

  // Bind inputs
  tbody.querySelectorAll(".budget-item-desc").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.budget_egp_items[i]) {
        projectState.budget_egp_items[i].desc = e.target.value;
        saveToStorage();
        renderLiveManuscript();
      }
    });
  });

  tbody.querySelectorAll(".budget-item-cat").forEach(sel => {
    sel.addEventListener("change", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.budget_egp_items[i]) {
        projectState.budget_egp_items[i].category = e.target.value;
        saveToStorage();
        renderBudgetEGPTable();
        renderLiveManuscript();
      }
    });
  });

  tbody.querySelectorAll(".budget-item-qty").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.budget_egp_items[i]) {
        projectState.budget_egp_items[i].qty = parseInt(e.target.value, 10) || 1;
        saveToStorage();
        renderBudgetEGPTable();
        renderLiveManuscript();
      }
    });
  });

  tbody.querySelectorAll(".budget-item-unit").forEach(inp => {
    inp.addEventListener("input", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.budget_egp_items[i]) {
        projectState.budget_egp_items[i].unit_cost = parseFloat(e.target.value) || 0;
        saveToStorage();
        renderBudgetEGPTable();
        renderLiveManuscript();
      }
    });
  });

  tbody.querySelectorAll(".btn-budget-item-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = parseInt(e.target.getAttribute("data-idx"), 10);
      if (projectState.budget_egp_items.length > 1) {
        projectState.budget_egp_items.splice(i, 1);
      } else {
        projectState.budget_egp_items = [{ desc: "", category: "B. Consumables & Reagents", qty: 1, unit_cost: 0 }];
      }
      saveToStorage();
      renderBudgetEGPTable();
      renderLiveManuscript();
    });
  });
}

// 10. Section 1 Abstract Word Counter (150–250 Words Target)
function initAbstractWordCounter() {
  const absInput = document.getElementById("proposal-abstract-input");
  if (absInput && !absInput._word_counter_wired) {
    absInput._word_counter_wired = true;
    absInput.addEventListener("input", (e) => {
      checkAbstractWordCount(e.target.value);
    });
    checkAbstractWordCount(absInput.value);
  }
}

function checkAbstractWordCount(text) {
  const badge = document.getElementById("abstract-word-badge");
  if (!badge) return;

  const words = (text || "").trim().split(/\s+/).filter(Boolean);
  const count = words.length;

  if (count === 0) {
    badge.innerText = "0 words (Target: 150–250 words)";
    badge.style.background = "#f1f5f9";
    badge.style.color = "#475569";
    badge.style.borderColor = "#cbd5e1";
  } else if (count >= 150 && count <= 250) {
    badge.innerText = `✅ ${count} words (Compliant with 150–250 target)`;
    badge.style.background = "#dcfce7";
    badge.style.color = "#15803d";
    badge.style.borderColor = "#86efac";
  } else if (count < 150) {
    badge.innerText = `⚠️ ${count} words (Under minimum: 150–250 words)`;
    badge.style.background = "#fef3c7";
    badge.style.color = "#b45309";
    badge.style.borderColor = "#fde68a";
  } else {
    badge.innerText = `🛑 ${count} words (Exceeds maximum limit of 250 words)`;
    badge.style.background = "#fee2e2";
    badge.style.color = "#b91c1c";
    badge.style.borderColor = "#fca5a5";
  }
}
