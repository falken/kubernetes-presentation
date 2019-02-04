## Services
This folder contains a few examples of how to deploy pods with services to Kubernetes.

#### Basic Service
The [service.yaml](service.yaml) file a Pod deployment that has a simple service that provides discovery and load balancing to some statefulset NGinx pods

One this is created you can see that it creates a ClusterIp for the service, which is an internal load balancer. 

#### Headless Service
The [headless-service.yaml](headless-service.yaml) file will build a headless service that does not provide an internal load balancer. However it does still provide DNS entries for the internal services.

#### Nodeport Service
The [nodeport-service.yaml](nodeport-service.yaml) file creates a NodePort service that will expose the service on a specific port on each of the nodes in the cluster.

#### LoadBalancer Service
The [loadbalancer.yaml](loadbalancer.yaml) file will create a service that uses an external load balancer to provide access to it's targets. In the example I used [MetalLB](https://metallb.universe.tf/), installation instructions can be found in [setup](../setup).

