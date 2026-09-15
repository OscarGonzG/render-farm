terraform {
  backend "s3" {
    bucket       = "render-farm-tfstate-718438899186-eu-south-2-an"
    key          = "${var.environment}/terraform.tfstate"
    region       = "eu-south-2"
    use_lockfile = true
    encrypt      = true
  }
  required_version = "~>1.16.1"
}

provider "aws" {
  region = "eu-south-1"
}