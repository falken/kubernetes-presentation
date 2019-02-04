## Setup

The files in the folder setup various components required for the examples

#### Init
The [init.yaml](init.yaml) file contains a simple config file for kubeadm to initialize a local master. If you would like pods to be able to be scheduled on the master then execute the [allow_master_schedule.sh](allow_master_schedule.sh) script. After initialization you can setup Calico as the networking layer by executing the [install_calico](install_calico.sh) script.

#### Helm
Installing Helm requires first [installing the cli](https://github.com/helm/helm/blob/master/docs/install.md). After the CLI is installed you need to give Tiller the permissions it needs for doing it's work. A highly insecure version of these permissions is available in [tiller.yaml](tiller.yaml). Once the permissions are created execute:

`helm init --service-account tiller`

#### Ingress Controller
In order to use Ingress components you will first need an Ingress Controller. The [mandatory.yaml](mandatory.yaml) file will initialize a simple [NGinx Ingress Controller](https://github.com/kubernetes/ingress-nginx). In order to externally access the controller use the [service-nodeport.yaml](service-nodeport.yaml) file (replacing the externalIp with your own).

#### Load Balancer
In order to use load balancer based services when not using a cloud provider you need a local provider for load balancers. I use [MetalLB](https://metallb.universe.tf/), which can be setup with the [metallb.yaml](metallb.yaml) file. You will need to modify the ConfigMap to give an available address range.

#### Dashboard (Optional)
The [dashboard.yaml](dashboard.yaml) file will setup the Kubernetes dashboard. Please note that these resources are created within the kube-system namespace. 
If you want to allow access to the dashboard locally (and unsecurely), execute
 
`kubectl expose deployment kubernetes-dashboard -n kube-system --external-ip <ip address of master node> --name kube-dash-ext`

This will expose the dashboard on port 9090 of the master.



