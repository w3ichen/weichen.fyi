"use client";

import LinkNewTab from "@/components/Buttons/LinkNewTab";
import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { HUAWEI_SKILLS } from "@/constants/skills";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({}));
const HEADER_PT = 6;
const SECTION_PT = 4;

export default function HuaweiPage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo title="Huawei Canada" imgSrc="swe/huawei_logo2.png" />
      <HeroImageBase src="swe/huawei_hero.jpg" sx={{ height: "300px" }} />

      <ProjectMetadata
        skills={HUAWEI_SKILLS}
        buttons={[
          {
            url: "https://www.huawei.com/ca",
            text: "huawei.com/ca",
            type: "web",
          },
          {
            url: "https://arxiv.org/abs/2501.00636",
            text: "DAC23 Paper",
            type: "paper",
          },
          {
            url: "https://arxiv.org/abs/2211.17228",
            text: "AAAI23 Paper",
            type: "paper",
          },
        ]}
      />

      <CaptionedImage
        src="swe/huawei_xmas.jpg"
        title="Neural Architecture Search Team"
        caption="I conducted cutting-edge AI research using PyTorch, running experiments on NVIDIA GPUs in a Linux environment. This involved performing literature reviews, translating high-level concepts into code, implementing algorithms from research papers, and visualizing results with Matplotlib. Collaboration with a Ph.D. student resulted in the publication of two AI papers."
        mt={2}
      />

      <Typography variant="h5" pt={HEADER_PT} gutterBottom>
        AIO-P: Expanding Neural Performance Predictors Beyond Image
        Classification
      </Typography>
      <Typography variant="body1">
        Keith G. Mills, Di Niu, Mohammad Salameh, <strong>Weichen Qiu</strong>,
        Fred X. Han, Puyuan Liu, Jialin Zhang, Wei Lu, Shangling Jui. “AIO-P:
        Expanding Neural Performance Predictors Beyond Image Classification.”
        The 37th Association for the Advancement of Artificial Intelligence
        Conference. Feb. 2023.{" "}
        <LinkNewTab href="https://arxiv.org/abs/2211.17228">[Arxiv]</LinkNewTab>
      </Typography>
      <Typography variant="caption">
        Accepted as a full paper at AAAI 2023, 19.6% acceptance rate.
      </Typography>
      <Typography variant="subtitle1" mt={1}>
        ABSTRACT
      </Typography>
      <Typography variant="body2">
        Evaluating neural network performance is critical to deep neural network
        design but a costly procedure. Neural predictors provide an efficient
        solution by treating architectures as samples and learning to estimate
        their performance on a given task. However, existing predictors are
        task-dependent, predominantly estimating neural network performance on
        image classification benchmarks. They are also search-space dependent;
        each predictor is designed to make predictions for a specific
        architecture search space with predefined topologies and set of
        operations. In this paper, we propose a novel All-in-One Predictor
        (AIO-P), which aims to pretrain neural predictors on architecture
        examples from multiple, separate computer vision (CV) task domains and
        multiple architecture spaces, and then transfer to unseen downstream CV
        tasks or neural architectures. We describe our proposed techniques for
        general graph representation, efficient predictor pretraining and
        knowledge infusion techniques, as well as methods to transfer to
        downstream tasks/spaces. Extensive experimental results show that AIO-P
        can achieve Mean Absolute Error (MAE) and Spearman&apos;s Rank
        Correlation (SRCC) below 1% and above 0.5, respectively, on a breadth of
        target downstream CV tasks with or without fine-tuning, outperforming a
        number of baselines. Moreover, AIO-P can directly transfer to new
        architectures not seen during training, accurately rank them and serve
        as an effective performance estimator when paired with an algorithm
        designed to preserve performance while reducing FLOPs.
      </Typography>
      <CaptionedImage
        src="swe/huawei_aiop_fig3.jpg"
        title=" CG K-Adapter Diagram"
        caption="Fig 3 in paper: We start with a graph encoder pre-trained on NAS-Bench-101 for IC and further extend the design with an adapter. The original encoder is frozen while we train the K-Adapter on a new search space and task, e.g., R50 on OD."
        mt={SECTION_PT}
      />

      <Typography variant="h5" pt={HEADER_PT} gutterBottom>
        Applying Graph Explanation to Operator Fusion
      </Typography>
      <Typography variant="body1">
        Keith G. Mills, Muhammad Fetrat Qharabagh, <strong>Weichen Qiu</strong>,
        Fred X. Han, Mohammad Salameh, Wei Lu, Shangling Jui, Di Niu. “Applying
        Graph Explanation to Operator Fusion.” The 60th Design Automation
        Conference (DAC 2023). July 2023.{" "}
        <LinkNewTab href="https://arxiv.org/abs/2501.00636">[Arxiv]</LinkNewTab>{" "}
        <LinkNewTab href="https://kgmills.github.io/assets/posters/applying_get_op_fusion_DAC2023.pdf">
          [Poster]
        </LinkNewTab>{" "}
        <LinkNewTab href="https://60dac.conference-program.com/presentation/?id=RESEARCH145&sess=sess243">
          [DAC Session]
        </LinkNewTab>
      </Typography>
      <Typography variant="caption">
        Accepted as a WIP poster at DAC 2023.
      </Typography>
      <Typography variant="subtitle1" mt={1}>
        ABSTRACT
      </Typography>
      <Typography variant="body2">
        Layer fusion techniques are critical to improving the inference
        efficiency of deep neural networks (DNN) for deployment. Fusion aims to
        lower inference costs by reducing data transactions between an
        accelerator&apos;s on-chip buffer and DRAM. This is accomplished by
        grouped execution of multiple operations like convolution and
        activations together into single execution units - fusion groups.
        However, on-chip buffer capacity limits fusion group size and optimizing
        fusion on whole DNNs requires partitioning into multiple fusion groups.
        Finding the optimal groups is a complex problem where the presence of
        invalid solutions hampers traditional search algorithms and demands
        robust approaches. In this paper we incorporate Explainable AI,
        specifically Graph Explanation Techniques (GET), into layer fusion.
        Given an invalid fusion group, we identify the operations most
        responsible for group invalidity, then use this knowledge to recursively
        split the original fusion group via a greedy tree-based algorithm to
        minimize DRAM access. We pair our scheme with common algorithms and
        optimize DNNs on two types of layer fusion: Line-Buffer Depth First
        (LBDF) and Branch Requirement Reduction (BRR). Experiments demonstrate
        the efficacy of our scheme on several popular and classical
        convolutional neural networks like ResNets and MobileNets. Our scheme
        achieves over 20% DRAM Access reduction on EfficientNet-B3.
      </Typography>
      <CaptionedImage
        src="swe/huawei_dac_fig1.jpg"
        title="Line-Buffer Depth First (LBDF)"
        caption="Fig 1 in paper: LBDF on a fusion group consisting of two 3 x 3 convolution kernels in sequence. Area bounded by the red square denotes the input data required to compute the current output. '-' denotes the next data entries to be released from the on-chip buffer. '+' denotes the next data point to be loaded from DRAM (input map) or computed (intermediate map)."
        mt={SECTION_PT}
      />
      <CaptionedImage
        src="swe/huawei_dac_fig2.jpg"
        title="High-Level Overview of Scheme"
        caption="Fig 2 in paper: (a): A search algorithm generates a partition plan, and an analytical validity checker determines the feasibility of each fusion group in the plan. (b): We use a GNN and GETs to find a subgraph explanation for each invalid fusion group. (c): We consider how to split the fusion group at every solution edge contained within the subgraph explanation. Note how the explanation contains a skip-connection, meaning we must cut at least 2 edges. (d): We use a greedy tree-based algorithm to consider all possible solutions which split the fusion group and sort them based whether the number of new fusion groups. In the optimal case (green arrow), both new fusion groups are valid. If one (blue arrow) or both (red arrow) of the fusion groups are invalid, we use the recursive algorithm to repeat the process from step (a) for each invalid fusion group."
        direction="column"
        spacing={1}
        mt={SECTION_PT}
      />

      <Typography variant="h5" pt={HEADER_PT} gutterBottom>
        Certifications
      </Typography>
      <ul>
        <li style={{ marginLeft: "20px" }}>
          Deep Learning Specialization by Andrew Ng at DeepLearning.AI{" "}
          <LinkNewTab href="https://www.coursera.org/specializations/deep-learning">
            [Coursera]
          </LinkNewTab>
        </li>
        <li style={{ marginLeft: "50px" }}>
          Convolutional Neural Networks Issued May 2022{" "}
          <LinkNewTab href="https://www.coursera.org/account/accomplishments/certificate/7HD6GGCW34FQ">
            [Credential ID: 7HD6GGCW34FQ]
          </LinkNewTab>
        </li>
        <li style={{ marginLeft: "50px" }}>
          Improving Deep Neural Networks: Hyperparameter Tuning, Regularization
          and Optimization Issued May 2022{" "}
          <LinkNewTab href="https://www.coursera.org/account/accomplishments/certificate/9M7BVQ5FVXZF">
            [Credential ID: 9M7BVQ5FVXZF]
          </LinkNewTab>
        </li>
        <li style={{ marginLeft: "50px" }}>
          Neural Networks and Deep Learning Issued May 2022{" "}
          <LinkNewTab href="https://www.coursera.org/account/accomplishments/certificate/AYAE7NPQYQMC">
            [Credential ID: AYAE7NPQYQMC]
          </LinkNewTab>
        </li>
        <li style={{ marginLeft: "50px" }}>
          Structuring Machine Learning Projects Issued May 2022{" "}
          <LinkNewTab href="https://www.coursera.org/account/accomplishments/certificate/ZZSRMGAATUPC">
            [Credential ID: ZZSRMGAATUPC]
          </LinkNewTab>
        </li>
      </ul>
    </Root>
  );
}
